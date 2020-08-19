import { Component, OnInit, OnDestroy, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.page.html',
  styleUrls: ['./view-task.page.scss'],
})
export class ViewTaskPage implements OnInit {

  public viewtask: string;
  object = {};
  category;
  numComments;
  workGroup;
  address;
  priority;
  assetID;

  constructor(private activatedRoute: ActivatedRoute, public menuCtrl: MenuController, private router: Router, public storage: Storage) { }


  ngOnInit() {
    this.viewtask = this.activatedRoute.snapshot.paramMap.get('id');
    this.category = JSON.stringify(this.object['category']);
  }
  goTask(){
    this.router.navigate(['tasks']) 
  }

  collectData(card){
    this.object = card
  }


}
