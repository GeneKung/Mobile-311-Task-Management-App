import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  public settings: string;
  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.settings = this.activateRoute.snapshot.paramMap.get('id');
  }

}