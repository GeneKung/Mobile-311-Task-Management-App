import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {
  public logout: string;
  constructor(private activatedRoute: ActivatedRoute, public menuCtrl: MenuController, private router: Router) { }

  ngOnInit() {
    this.logout = this.activatedRoute.snapshot.paramMap.get('id');
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }

   signIn(){
    this.router.navigate(['support'])
    this.menuCtrl.enable(true);
  }
}
