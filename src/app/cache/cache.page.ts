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

  ngOnInit() {
    this.cache = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
