import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.page.html',
  styleUrls: ['./createtask.page.scss'],
})
export class CreatetaskPage implements OnInit {
  public createtask: string;
  constructor(private activatedRoute: ActivatedRoute, public menuCtrl: MenuController, private router: Router) { }

  ngOnInit() {
    this.createtask = this.activatedRoute.snapshot.paramMap.get('id');
  }
  goTask(){
    this.router.navigate(['tasks'])
  }
}
