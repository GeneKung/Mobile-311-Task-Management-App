import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  MenuController } from '@ionic/angular';
@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  public users: string;
  isIndeterminate:boolean;
  masterCheck:boolean;
  checkBoxList:any;


  constructor(private activatedRoute: ActivatedRoute, public menuCtrl: MenuController,){
    this.checkBoxList = [
      {
        value:"gene@alan.app",
        isChecked:true
      },{
        value:"johnny@alan.app",
        isChecked:true
      },{
        value:"justin@alan.app",
        isChecked:true
      }
    ];
  }


  
  ngOnInit() {
    this.users = this.activatedRoute.snapshot.paramMap.get('id');
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
