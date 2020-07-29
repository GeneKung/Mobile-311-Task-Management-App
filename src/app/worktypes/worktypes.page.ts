import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-worktypes',
  templateUrl: './worktypes.page.html',
  styleUrls: ['./worktypes.page.scss'],
})
export class WorkTypesPage implements OnInit {
  public worktypes: string;
  isIndeterminate:boolean;
  masterCheck:boolean;
  checkBoxList:any;


  constructor(private activatedRoute: ActivatedRoute, public menuCtrl: MenuController, public storage: Storage){
    this.checkBoxList = [
      {
        value:"Abandoned Hazardous Waste",
        isChecked:false
      },{
        value:"Abandoned Shopping Cart",
        isChecked:false
      },{
        value:"Animla Control",
        isChecked:false
      },{
        value:"Asphalt Repair/Pothole",
        isChecked:false
      },{
        value:"Asphalt/Concrete Repair-Park",
        isChecked:false
      },{
        value:"City Trees",
        isChecked:false
      },{
        value:"Dead Animal",
        isChecked:false
      },{
        value:"Debris at Marina",
        isChecked:false
      },{
        value:"Debris in Park",
        isChecked:false
      },{
        value:"Debris in Public Right-of-Way",
        isChecked:false
      },
    ];
  }


  checkAll() {
    setTimeout(()=>{
      this.checkBoxList.forEach(obj => {
        obj.isChecked = true;
      });
    });
  }

  unCheckAll() {
    setTimeout(()=>{
      this.checkBoxList.forEach(obj => {
        obj.isChecked = false;
      });
    });
  }
  
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }
  
  ngOnInit() {
    this.worktypes = this.activatedRoute.snapshot.paramMap.get('id');
  }

  checkEvent() {
    const totalItems = this.checkBoxList.length;
    let checked = 0;
    this.checkBoxList.map(obj => {
      if (obj.isChecked) checked++;
    });
    if (checked > 0 && checked < totalItems) {
      //If even one item is checked but not all
      this.isIndeterminate = true;
      this.masterCheck = false;
    } else if (checked == totalItems) {
      //If all are checked
      this.masterCheck = true;
      this.isIndeterminate = false;
    } else {
      //If none is checked
      this.isIndeterminate = false;
      this.masterCheck = false;
    }
  }
}
