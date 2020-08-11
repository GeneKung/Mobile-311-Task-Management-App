import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { applySourceSpanToStatementIfNeeded } from '@angular/compiler/src/output/output_ast';
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
  assetid = this.AssetID;
  constructor(private activatedRoute: ActivatedRoute, public menuCtrl: MenuController, private router: Router) { }


  ngOnInit() {
    this.createtask = this.activatedRoute.snapshot.paramMap.get('id');
  }
  goTask(){
    this.router.navigate(['tasks'])
  }
  
}

