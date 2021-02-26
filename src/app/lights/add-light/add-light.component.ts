import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Light } from '../light';
import { LightsService } from '../lights.service';

@Component({
  selector: 'app-add-light',
  templateUrl: './add-light.component.html',
  styleUrls: ['./add-light.component.css']
})
export class AddLightComponent implements OnInit {
  
  formLight: FormGroup;
  light: Light;

  constructor(private formBuilder:FormBuilder, private lightServicio: LightsService, public router :Router) { }

  ngOnInit(): void {
    this.startForm();
  }

  startForm(){
    this.formLight = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', [Validators.required, Validators.minLength(5)]],
      bright: [, Validators.required],
      maxbright: [, Validators.required],
      power: [, Validators.required],
      brand: [, Validators.required],
      status: ['off', Validators.required],
      rgb: ['0', Validators.required],
      color: ['#FFC300', Validators.required],
    },{});
  }

  isFieldValid(field: string): boolean {
    return !this.formLight.get(field).valid && this.formLight.get(field).touched;
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
    if (this.formLight.valid) {
      this.light = this.formLight.value;
      this.lightServicio.addLight(this.light).subscribe( );
      this.router.navigate(['/lights']);
    } else {
      this.validateAllFormFields(this.formLight);
    }
  }

}
