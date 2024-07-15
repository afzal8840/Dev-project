import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {
  public login: FormGroup | any
  

  constructor(
    private router: Router,
    private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(){
    this.login = this.fb.group({
      contact: ['',[Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      password: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
    })
  }

  submit(){
    this.login.markAllAsTouched();
    // this.router.navigate(['./home'])
    if(this.login.invalid) return;
    console.log(this.login.value);
  }
  
  home() {
    // this.router.navigate(['']);
  }
}
