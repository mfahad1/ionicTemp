import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterComponent } from '../register/register';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'login-component',
  templateUrl: "./login.html",
})
export class LoginComponent {

  private regexForEmail = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
  private loginForm:FormGroup;

  constructor(
    private navController: NavController
  ) {

    this.loginForm = new FormGroup({
      email: new FormControl("",Validators.compose([Validators.required, Validators.pattern(this.regexForEmail)])),
      password: new FormControl("",Validators.compose([Validators.required])),
    });
  }

  ngOnInit() {


  }

  public gotoRegister() {
    this.navController.push(RegisterComponent);
  }


}
