import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Panel } from '../panel';
import { PanelsService } from '../panels.service';

@Component({
  selector: 'app-panel-add',
  templateUrl: './panel-add.component.html',
  styleUrls: ['./panel-add.component.css']
})
export class PanelAddComponent implements OnInit {
  
  formPanel: FormGroup;
  panel: Panel;
  error: string;

  constructor(private formBuilder:FormBuilder, private panelServicio: PanelsService, public router :Router) { }

  ngOnInit(): void {
    this.startForm();
  }

  startForm(){
    this.formPanel = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', [Validators.required, Validators.minLength(5)]],
      max: ['', Validators.minLength(3)],
    },{});
  }

    isFieldValid(field: string): boolean {
      return !this.formPanel.get(field).valid && this.formPanel.get(field).touched;
    }

    displayFieldCss(field: string) {
      return {
        'has-error': this.isFieldValid(field),
        'has-feedback': this.isFieldValid(field)
      };
    }
  
    validateAllFormFields(formGroup: FormGroup) {         
      Object.keys(formGroup.controls).forEach(field => { 
        const control = formGroup.get(field);             
        if (control instanceof FormControl) {             
          control.markAsTouched({ onlySelf: true });
        } else if (control instanceof FormGroup) {        
          this.validateAllFormFields(control);            
        }
      });
    }

    onSubmit() {
      if (this.formPanel.valid) {
        this.panel = this.formPanel.value;
        this.panelServicio.addPanel(this.panel).subscribe();
        setTimeout(()=>{
          this.router.navigate(['/panels']);
        },1000);
       
      } else {
        this.validateAllFormFields(this.formPanel);
      }
    }
   
}
