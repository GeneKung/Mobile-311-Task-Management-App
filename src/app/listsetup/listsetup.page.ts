import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listsetup',
  templateUrl: './listsetup.page.html',
  styleUrls: ['./listsetup.page.scss'],
})
export class ListsetupPage implements OnInit {
  public listsetup: string;
  
  constructor(private activatedRoute: ActivatedRoute, public menuCtrl: MenuController, private router: Router) { }

  ngOnInit() {
    this.listsetup = this.activatedRoute.snapshot.paramMap.get('id');
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }
  closeList(){
    this.router.navigate(['tasks'])
    this.menuCtrl.enable(true);
  }
  goWorkType(){
    this.router.navigate(['worktypes'])
  }
  goToStatuses(){
    this.router.navigate(["status"])
  }
  goToUsers(){
    this.router.navigate(['users'])
  }
}
