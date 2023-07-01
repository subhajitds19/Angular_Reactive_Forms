import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  myForm !: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      fname : new FormControl('', Validators.required),
      email : new FormControl('', [Validators.required, Validators.minLength(10)]),
      pwd : new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{4,8}$')])
    })
  }
  submitData(){
    console.log('Received from myForm', this.myForm.value);
    
  }

}
