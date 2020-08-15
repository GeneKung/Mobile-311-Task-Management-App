import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatetaskPageRoutingModule } from './createtask-routing.module';
import { MaterialsPage } from '../materials/materials.page'
import { CreatetaskPage } from './createtask.page';
import { TasksPage } from '../tasks/tasks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatetaskPageRoutingModule,
  ],
  declarations: [CreatetaskPage],
  providers: [
    TasksPage,
  ]
})
export class CreatetaskPageModule {}
