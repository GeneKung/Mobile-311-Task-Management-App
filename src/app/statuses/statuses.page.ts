import { Component, OnInit } from '@angular/core';
import { Config, ModalController, NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-statuses',
  templateUrl: './statuses.page.html',
  styleUrls: ['./statuses.page.scss'],
})
export class StatusesPage implements OnInit {
  public statuses: string;
  ios: boolean;
  tracks: {name: string, icon: string, isChecked: boolean}[] = [];
  constructor(    
    public modalCtrl: ModalController,
    public navParams: NavParams,
    private activateRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.statuses = this.activateRoute.snapshot.paramMap.get('id');
  }

}

