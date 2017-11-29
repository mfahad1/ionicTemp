import { Component } from '@angular/core';

@Component({
  selector: 'indicative-rates-component',
  templateUrl: "./indicativeRates.html",
})
export class IndicativeRatesComponent {

  items = [] ;
 
  constructor(
  ) {

    this.items = [
      {title:'Bahria Paradise 250 Sq Yards', expanded: false},
      {title:'Bahria Paradise 500 Sq Yards', expanded: false},
      {title:'Bahria Paradise 1000 Sq Yards', expanded: false},
      {title:'Bahria Sports City 250 Sq Yards', expanded: false},
    ];
  }

  ngOnInit() {


  }

  expandItem(item){
      
    this.items.map((listItem) => {

      if(item == listItem){
          listItem.expanded = !listItem.expanded;
      } else {
          listItem.expanded = false;
      }

      return listItem;

    });

  }


}
