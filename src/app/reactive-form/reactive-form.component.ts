import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  loginForm = new FormGroup({
    Name: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
  });
 loginuser() {
    console.log(this.loginForm.value  );
  }
  get name(){
    return this.loginForm.get('Name');
  }
  get pass(){
    return this.loginForm.get('password');
  }
  constructor() {}

  ngOnInit(): void {}
}
