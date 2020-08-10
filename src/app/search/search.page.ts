import { Component, OnInit } from '@angular/core';
import { IonSelect } from '@ionic/angular';
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  hideList = true;
  countrySelectRef: any;
  constructor() { }

  ngOnInit() {
  }
  displayCountry() {
    this.countrySelectRef.open();
 }
 setCountry(){
   
 }
}
