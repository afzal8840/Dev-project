import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  public signUp: FormGroup | any;

  constructor(private router: Router, 
    private fb: FormBuilder,
    private _signupService: SignupService
    ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.signUp = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(10)]],
      lastName: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
      contact: ['',[Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      gender: ['', [Validators.required]],
    });
  }


  submit() {
    this.signUp.markAllAsTouched();
    if (this.signUp.invalid) return;
    this.router.navigate(['/login']);

  //   const data = {
  //     ...this.signUp.value,
  //     type: 'admin',
  //   };
  //   this._signupService.addUsers(data).subscribe(
  //     (result) => {
  //     },
  //     (err) => console.log(err)
  //   );
  //   console.log(this.signUp.value);
  // }
}
}
