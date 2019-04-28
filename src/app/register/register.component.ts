import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { faPen, faArrowLeft, faShare } from '@fortawesome/free-solid-svg-icons';
import { RestService, User, Response } from '../core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public pen = faPen;
  public arrowLeft = faArrowLeft;
  public share = faShare;
  public registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private location: Location, private service: RestService, private router: Router) {
    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.required],
      displayName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validator: this.mustMatch('password', 'confirmPassword')
    });
  }

  ngOnInit() {}

  public onSubmit() {
    const data = new User(this.registerForm.value.userName, this.registerForm.value.displayName, this.registerForm.value.password);
    this.service.postRegister(data).subscribe((response) => {
      if (response.code === 200) {
        this.router.navigate(['chatlist']);
      }
    });
  }

  public routeBack() {
    this.location.back();
  }

  public get form() {
    return this.registerForm.controls;
  }

  private mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          return;
      }
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
    };
  }

}
