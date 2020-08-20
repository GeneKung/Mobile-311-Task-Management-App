import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewTaskPageRoutingModule } from './view-task-routing.module';

import { ViewTaskPage } from '../view-task/view-task.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewTaskPageRoutingModule
  ],
  declarations: [ViewTaskPage],
  providers: []
})
export class ViewTaskPageModule {}
