import { Component, OnInit, OnDestroy, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.page.html',
  styleUrls: ['./view-task.page.scss'],
})
export class ViewTaskPage implements OnInit {
  public viewtask: string;
  now = moment().format('MM/DD/YYYY');
  taskName;
  workGroup;
  workType;
  assetID;
  department;
  address;
  description;
  equipment;
  materials;


  constructor(private activatedRoute: ActivatedRoute, public menuCtrl: MenuController, private router: Router) {
    this.taskName = "SideWalk Grind/Patch"
    this.workGroup = "Citizen Request"
    this.workType = "Asphalt Repair/Pothole"
    this.assetID = "12638692"
    this.department="City Managers Office"
    this.address="14499 Elm St"
    this.description="Fill the marked pothole on the right side of the street."
    this.equipment="758 - Chipper"
    this.materials="'12 - CIP Curb Drain"
   }

  ngOnInit() {
    this.viewtask = this.activatedRoute.snapshot.paramMap.get('id');
  }

  goTask(){
    this.router.navigate(['tasks'])
  }

  logtaskName(){
    console.log(this.taskName)
  }

  logworkGroup(){
    console.log(this.workGroup)
  }
  
  logworkassetID(){
    console.log(this.assetID);
  }

  logworkType(){
    console.log(this.workType)
  }

  logDepartment(){
    console.log(this.department)
  }

  logAddress(){
    console.log(this.address)
  }

  logDescription(){
    console.log(this.description)
  }

  logEquipment(){
    console.log(this.equipment)
  }

  logMaterials(){
    console.log(this.materials)
  }

}
