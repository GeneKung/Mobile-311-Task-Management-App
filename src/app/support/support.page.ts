import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit {
  public support: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.support = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
