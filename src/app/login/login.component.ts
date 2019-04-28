import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { faPen, faArrowLeft, faShare } from '@fortawesome/free-solid-svg-icons';
import { RestService, User, Response } from '../core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public pen = faPen;
  public arrowLeft = faArrowLeft;
  public share = faShare;
  public userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private location: Location, private service: RestService, private router: Router) {
    this.userForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    const user = new User(this.userForm.value.userName, '', this.userForm.value.password);
    this.service.postLogin(user).subscribe((response) => {
      if (response.code === 200) {
        this.router.navigate(['chatlist']);
      }
    });
  }

  routeBack() {
    this.location.back();
  }

}
