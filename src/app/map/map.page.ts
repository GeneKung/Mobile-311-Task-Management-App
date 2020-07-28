import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  public map: string;
  constructor(private activatedRoute: ActivatedRoute, public menuCtrl: MenuController, private router: Router) { }

  ngOnInit() {
    this.map = this.activatedRoute.snapshot.paramMap.get('id');
  }
  goListSetup(){
    this.router.navigate(['listsetup'])
  }
  goMap(){
    this.router.navigate(['map'])
  }
  goList(){
    this.router.navigate(['tasks'])
  }
  goCreateTask(){
    this.router.navigate(['createtask'])
  }
}
