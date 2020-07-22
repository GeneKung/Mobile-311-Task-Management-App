import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public login: string;
  constructor(private activatedRoute: ActivatedRoute, public menuCtrl: MenuController, private router: Router) { }

  ngOnInit() {
    this.login = this.activatedRoute.snapshot.paramMap.get('id');
  }
  
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }
   
   signIn(){
    this.router.navigate(['tasks'])
    this.menuCtrl.enable(true);
  }
}
