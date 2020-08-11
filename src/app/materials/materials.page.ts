import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-materials',
  templateUrl: './materials.page.html',
  styleUrls: ['./materials.page.scss'],
})
export class MaterialsPage implements OnInit {

  public materials: string;

  constructor(private activateRoute: ActivatedRoute, private router: Router,) { }

  ngOnInit() {
    this.materials = this.activateRoute.snapshot.paramMap.get('id');
  }

  goBack() {
    this.router.navigate(['createtask'])
  }

}
