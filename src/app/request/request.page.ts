import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {
  public request: string;


  constructor(private activatedRoute: ActivatedRoute, public menuCtrl: MenuController, private router: Router, public storage: Storage) { }

  

  ngOnInit() {
    this.request = this.activatedRoute.snapshot.paramMap.get('id');
  }

  goBack() {
    this.router.navigate(['createtask'])
  }

}
