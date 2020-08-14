import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { applySourceSpanToStatementIfNeeded } from '@angular/compiler/src/output/output_ast';
import { Storage } from '@ionic/storage';
import { PhotoService } from '../services/photo.service';


@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.page.html',
  styleUrls: ['./createtask.page.scss'],
})
export class CreatetaskPage implements OnInit {
  public createtask: string;
  public address: any;
  public AssetID: any;
  public Description: any;
  public workgroup: any;
  getWorkGroup;
  getWorkType;
  assetID;
  getDepartment;
  getAddress;
  getPriority;
  getDescription;
  listInfo = {};
  listInfoID = 1;

  allPosts = [];


  constructor(private activatedRoute: ActivatedRoute, public menuCtrl: MenuController, private router: Router,  public storage: Storage, public photoService: PhotoService,
) { 
    this.setValue();
    this.getValue(); 
  }

  ngOnInit() {
    this.createtask = this.activatedRoute.snapshot.paramMap.get('id');
    this.storage.get('listInfoID').then( (val) =>{
      console.log(val);
      this.listInfoID = val;  
    for(let id = 1; id < this.listInfoID; id++){
      this.storage.get(`${id}`).then( (val) =>{
        console.log(val);
      });
    }
  });  
  }

  saveToList(){
    this.listInfo['workGroup'] = this.getWorkGroup
    this.listInfo['workType'] = this.getWorkType
    this.listInfo['assetID'] = this.assetID
    this.listInfo['department'] = this.getDepartment
    this.listInfo['address'] = this.getAddress
    this.listInfo['priority'] = this.getPriority
    this.listInfo['description'] = this.getDescription
    this.storeData(this.listInfo)
    this.getWorkGroup = null
    this.getWorkType = null
    this.assetID = null
    this.getDepartment = null
    this.getAddress = null
    this.getPriority = null
    this.getDescription = null
    this.router.navigate(['tasks']);
    this.menuCtrl.enable(true);
    this.listInfo = {};
  }

  storeData(listInfo){
    this.storage.set(`${this.listInfoID}`, JSON.stringify(listInfo));
    console.log(this.listInfoID);
    this.listInfoID += 1;
    this.storage.set('listInfoID', this.listInfoID);

  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }
   
  setValue(){
    this.storage.set('name', "ironMan");
  }

  getValue(){
    this.storage.get('name').then( (val) =>{
      console.log(val);
    })
  }

  getByWorkGroup(getWorkGroup){
    console.log(getWorkGroup)
  }

  getByWorkType(getWorkType){
    console.log(getWorkType)
  }

  logAssetID(){
    console.log(this.assetID)
  }

  getByDepartment(getDepartment){
    console.log(getDepartment)
  }

  logAddress(){
    console.log(this.getAddress)
  }

  getByPriority(getPriority){
    console.log(getPriority)
  }
  
  logDescription(){
    console.log(this.getDescription)
  }

  goTask(){
    this.router.navigate(['tasks']);
    this.menuCtrl.enable(true);
  }
  goRequest(){
    this.router.navigate(['request'])
  }
  goEmployees(){
    this.router.navigate(['employees'])
  }
  goEquipment(){
    this.router.navigate(['equipment'])
  }
  goMaterials(){
    this.router.navigate(['materials'])
  }
  goComments(){
    this.router.navigate(['comments'])
  }

}

