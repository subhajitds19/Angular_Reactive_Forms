import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
  myForm !: FormGroup;

  constructor(private fbuild : FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fbuild.group({
      fname :['', [Validators.required, Validators.pattern('^[a-zA-Z]+ [a-zA-Z]+$')]],
      email:['', [Validators.required, Validators.pattern('^([a-z0-9.-]+)@([a-z]{2,15}).([a-z.]{2,10})$')]],
      pwd:['', Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{4,8}$')],
      male:[''],
      city:['']
    })
  }
  submitValue(){
    console.log("submitted successfully");
    console.log("submitted Data", this.myForm.value);
    
    
  }

}
