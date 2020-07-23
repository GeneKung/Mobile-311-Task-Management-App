import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {
  public status: string;
  isIndeterminate:boolean;
  masterCheck:boolean;
  checkBoxList:any;
  constructor(private activatedRoute: ActivatedRoute) {
    this.checkBoxList = [
      {
        value:"Courtesy Notice",
        isChecked:false
      },{
        value:"Door Tag",
        isChecked:false
      },{
        value:"Duplicate Request",
        isChecked:false
      },{
        value:"NOV",
        isChecked:false
      },{
        value:"New Request",
        isChecked:false
      },{
        value:"Received",
        isChecked:false
      },{
        value:"Scheduled for LED Replacement",
        isChecked:false
      },{
        value:"VOID",
        isChecked:false
      },{
        value:"Work In Progress",
        isChecked:false
      },{
        value:"Admin. Citation",
        isChecked:false
      },
    ];
   }
  ngOnInit() {
    this.status = this.activatedRoute.snapshot.paramMap.get('id');
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
