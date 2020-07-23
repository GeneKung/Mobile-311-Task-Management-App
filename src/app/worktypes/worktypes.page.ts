import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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


  constructor(private activatedRoute: ActivatedRoute){
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

  
  ngOnInit() {
    this.worktypes = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
