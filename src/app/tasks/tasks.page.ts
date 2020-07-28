import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {
  public tasks: string;
  lat: any;
  lng: any;
  constructor(private activatedRoute: ActivatedRoute, public menuCtrl: MenuController, private router: Router, private geolocation: Geolocation) { }

  ngOnInit() {
    this.tasks = this.activatedRoute.snapshot.paramMap.get('id');
  }
  goListSetup(){
    this.router.navigate(['listsetup'])
  }
  goList(){
    this.router.navigate(['tasks'])
  }
  goCreateTask(){
    this.router.navigate(['createtask'])
  }
  ionViewDidLoad() {
    this.geolocation.getCurrentPosition().then( pos => {
      this.lat = pos.coords.latitude;
      this.lng = pos.coords.longitude;
    }).catch( err => console.log(err));
  }
}
