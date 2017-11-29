import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IndicativeRatesComponent } from '../indicativeRates/indicativeRates';

@Component({
  selector: 'select-menu-component',
  templateUrl: "./selectMenu.html",
})
export class SelectMenuComponent {

 
  constructor(
    private navController: NavController
  ) {

  
  }

  ngOnInit() {


  }

  goto() {
    this.navController.push(IndicativeRatesComponent);
  }


}
