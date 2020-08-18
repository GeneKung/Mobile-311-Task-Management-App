import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.page.html',
  styleUrls: ['./view-task.page.scss'],
})
export class ViewTaskPage implements OnInit {

  public viewtask: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.viewtask = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
