import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.page.html',
  styleUrls: ['./employees.page.scss'],
})
export class EmployeesPage implements OnInit {

  public employees: string;

  constructor(private activateRoute: ActivatedRoute, private router: Router,) { }

  ngOnInit() {
    this.employees = this.activateRoute.snapshot.paramMap.get('id');
  }

  goBack() {
    this.router.navigate(['createtask'])
  }

}
