import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { IonicModule } from '@ionic/angular';

import { TasksPageRoutingModule } from './tasks-routing.module';

import { TasksPage } from './tasks.page';
import { CommentsPage } from '../comments/comments.page';
import { CreatetaskPage } from '../createtask/createtask.page'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TasksPageRoutingModule
  ],
  declarations: [TasksPage],
  providers: [
    Geolocation,
    CommentsPage,
    CreatetaskPage
  ]
})
export class TasksPageModule {}
