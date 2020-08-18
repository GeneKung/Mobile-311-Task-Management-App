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
import { TasksPage } from '../tasks/tasks.page';

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
  getCategory;
  getWorkGroup;
  getWorkType
  assetID;
  getDepartment;
  getAddress;
  getPriority;
  getDescription;
  listInfo = {};
  listInfoID = 1;
  displayPosts = {}
  allPosts = [];



  constructor(private activatedRoute: ActivatedRoute, public menuCtrl: MenuController, private router: Router,  public storage: Storage, public photoService: PhotoService, public employeesPage: EmployeesPage, public materialsPage: MaterialsPage, public equipmentPage: EquipmentPage,
    public tasksPage: TasksPage) { 
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
  
  createTask(){
    this.listInfo['category'] = this.getCategory;
    this.listInfo['workGroup'] = this.getWorkGroup;
    this.listInfo['workType'] = this.getWorkType;
    this.listInfo['assetID'] = this.assetID;
    this.listInfo['department'] = this.getDepartment;
    this.listInfo['address'] = this.getAddress;
    this.listInfo['priority'] = this.getPriority;
    this.listInfo['description'] = this.getDescription;
    this.tasksPage.createCard(this.listInfo);
    window.setTimeout(() => this.goTask(), 400);

  }

  ngOnInit() {
    this.createtask = this.activatedRoute.snapshot.paramMap.get('id'); 
  }

  getByCategory(getCategory){
    console.log(getCategory)
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
  goGallery(){
    this.router.navigate(['photo-gallery'])
  }


}

