import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { IonicModule } from '@ionic/angular';

import { TasksPageRoutingModule } from './tasks-routing.module';

import { TasksPage } from './tasks.page';

import { CommentsPage } from '../comments/comments.page';
import { EmployeesPage } from '../employees/employees.page';
import { MaterialsPage } from '../materials/materials.page';
import { EquipmentPage } from '../equipment/equipment.page';
import { PhotoGalleryPage } from '../photo-gallery/photo-gallery.page';

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
    EmployeesPage,
    MaterialsPage,
    EquipmentPage,
    PhotoGalleryPage,
  ]
})
export class TasksPageModule {}
