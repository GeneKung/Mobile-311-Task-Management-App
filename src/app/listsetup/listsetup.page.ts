import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listsetup',
  templateUrl: './listsetup.page.html',
  styleUrls: ['./listsetup.page.scss'],
})
export class ListsetupPage implements OnInit {
  public listsetup: string;
  
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.listsetup = this.activatedRoute.snapshot.paramMap.get('id');
  }
  closeList(){
    this.router.navigate(['tasks'])
  }
}
