import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Speacker } from '../speacker';
import { SpeackerService } from '../speacker.service';

@Component({
  selector: 'app-add-speaker',
  templateUrl: './add-speaker.component.html',
  styleUrls: ['./add-speaker.component.css']
})
export class AddSpeakerComponent implements OnInit {
  
  formSpeaker: FormGroup;
  speaker: Speacker;

  constructor(private formBuilder:FormBuilder, private speakerServicio: SpeackerService, public router :Router) { }

  ngOnInit(): void {
    this.startForm();
  }

  startForm(){
    this.formSpeaker = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', [Validators.required, Validators.minLength(5)]],
      brand: ['', Validators.required],
      status: ['off', Validators.required],
      volume: ['0', Validators.required],
    },{});
  }

  isFieldValid(field: string): boolean {
    return !this.formSpeaker.get(field).valid && this.formSpeaker.get(field).touched;
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
    if (this.formSpeaker.valid) {
      this.speaker = this.formSpeaker.value;
      this.speakerServicio.addSpeakers(this.speaker).subscribe();
      this.router.navigate(['/speakers']);
    } else {
      this.validateAllFormFields(this.formSpeaker);
    }
  }

}
