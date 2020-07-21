import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {
  public logout: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.logout = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
