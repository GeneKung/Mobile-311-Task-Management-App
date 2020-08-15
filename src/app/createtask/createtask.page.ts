import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { applySourceSpanToStatementIfNeeded } from '@angular/compiler/src/output/output_ast';
import { Storage } from '@ionic/storage';
import { PhotoService } from '../services/photo.service';
import { MaterialsPage } from '../materials/materials.page'
import { EmployeesPage } from '../employees/employees.page'
import { EquipmentPage } from '../equipment/equipment.page'

@Injectable()
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
  displayPosts = {}
  allPosts = [];

  constructor(private activatedRoute: ActivatedRoute, public menuCtrl: MenuController, private router: Router,  public storage: Storage, public photoService: PhotoService, public employeesPage: EmployeesPage, public materialsPage: MaterialsPage, public equipmentPage: EquipmentPage) { 
    this.setValue();
    this.getValue(); 
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

  ngOnInit() {
    this.createtask = this.activatedRoute.snapshot.paramMap.get('id'); 
    this.materialsPage.storage.get('materialID').then( (val) =>{
      console.log(val);
      this.materialsPage.materialID = val;  
    for(let id = 1; id < this.materialsPage.materialID; id++){
      this.storage.get(`${id}`).then( (val) =>{
        console.log(val);
        this.materialsPage.displayPosts.push(JSON.parse(val));
        console.log(this.materialsPage.displayPosts);
      });
    }
  }); 
    this.employeesPage.storage.get('dataID').then( (val) =>{
      console.log(val);
      this.employeesPage.dataID = val;  
    for(let id = 1; id < this.employeesPage.dataID; id++){
      this.employeesPage.storage.get(`${id}`).then( (val) =>{
        console.log(val);
        this.employeesPage.displayPosts.push(JSON.parse(val));
        console.log(this.employeesPage.displayPosts);
      });
    }
  });
    this.equipmentPage.storage.get('dataequipID').then( (val) =>{
      console.log(val);
      this.equipmentPage.dataequipID = val;  
    for(let id = 1; id < this.equipmentPage.dataequipID; id++){
      this.storage.get(`${id}`).then( (val) =>{
        console.log(val);
        this.equipmentPage.displayPosts.push(JSON.parse(val));
        console.log(this.equipmentPage.displayPosts);
      });
    }
  }); 
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

