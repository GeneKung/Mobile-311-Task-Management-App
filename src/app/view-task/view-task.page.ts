import { Component, OnInit, OnDestroy, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';


@Injectable()
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
  name;
  constructor(private activatedRoute: ActivatedRoute, public menuCtrl: MenuController, private router: Router, public storage: Storage,
    ) { 
    }


  ngOnInit() {
    this.viewtask = this.activatedRoute.snapshot.paramMap.get('id');
  }
  goTask(){
    this.router.navigate(['tasks']) 
  }
  button(){
    this.name = "bye";
    console.log(this.name);
    return this.name;
  }
  collectData(card){
    this.object = card;
    this.name = JSON.stringify(this.object.listInfo['category']);
  }
}
