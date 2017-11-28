import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginComponent } from '../login/login';

@Component({
  selector: 'register-component',
  templateUrl: "./register.html",
})
export class RegisterComponent {


  constructor(
    private navController:NavController
  ) {
  }

  ngOnInit() {


  }

  public gotoLogin(){
    this.navController.push(LoginComponent);
  }


}
