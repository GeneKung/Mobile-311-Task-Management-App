import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  public settings: string;
  data:boolean;
  constructor(private activateRoute: ActivatedRoute, private ref: ChangeDetectorRef) { 
    this.data = true;
  }

  ngOnInit() {
    this.settings = this.activateRoute.snapshot.paramMap.get('id');
  }
  toggle(){
    this.ref.detectChanges();
    this.data = !this.data;
    console.log(this.data);
  }
}