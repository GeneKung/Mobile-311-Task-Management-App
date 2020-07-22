import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cache',
  templateUrl: './cache.page.html',
  styleUrls: ['./cache.page.scss'],
})
export class CachePage implements OnInit {
  public cache: string;
  constructor(private activatedRoute: ActivatedRoute) { }
  requests = 3;
  photos = 234;
  assets = 2;
  breadcrumbs = 0;
  
  clearCache(){
    this.requests = 0;
    this.photos = 0;
    this.assets = 0;
    this.breadcrumbs = 0;
  }
  ngOnInit() {
    this.cache = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
