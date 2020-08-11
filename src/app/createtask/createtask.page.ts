import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { applySourceSpanToStatementIfNeeded } from '@angular/compiler/src/output/output_ast';
import { Storage } from '@ionic/storage';

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
  constructor(private activatedRoute: ActivatedRoute, public menuCtrl: MenuController, private router: Router,  public storage: Storage) { 
    this.setValue();
    this.getValue(); 
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
  }
  goTask(){
    this.router.navigate(['tasks']);
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

