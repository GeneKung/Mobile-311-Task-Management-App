import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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


  constructor(private activatedRoute: ActivatedRoute){
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

}
