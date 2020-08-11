import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {

  public materials: string;

  constructor(private activateRoute: ActivatedRoute, private router: Router,) { }

  ngOnInit() {
    this.materials = this.activateRoute.snapshot.paramMap.get('id');
  }

  goBack() {
    this.router.navigate(['createtask'])
  }

}
