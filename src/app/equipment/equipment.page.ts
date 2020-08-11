import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.page.html',
  styleUrls: ['./equipment.page.scss'],
})
export class EquipmentPage implements OnInit {
  public equipment: string;

  constructor(private activateRoute: ActivatedRoute, private router: Router,) { }

  ngOnInit() {
    this.equipment = this.activateRoute.snapshot.paramMap.get('id');
  }
  goBack() {
    this.router.navigate(['createtask'])
  }

}
