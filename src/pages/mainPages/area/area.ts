import { Component } from '@angular/core';
import { SelectMenuComponent } from '../selectMenu/selectMenu';
import { NavController } from 'ionic-angular/navigation/nav-controller';
@Component({
  selector: 'area-component',
  templateUrl: "./area.html",
})
export class AreaComponent {

 
  constructor(
    private navController: NavController
  ) {

  
  }

  ngOnInit() {


  }

 
  goto() {
    this.navController.push(SelectMenuComponent);
  }

}
