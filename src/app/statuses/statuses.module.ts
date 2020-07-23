import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatusesPageRoutingModule } from './statuses-routing.module';

import { StatusesPage } from './statuses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatusesPageRoutingModule
  ],
  declarations: [StatusesPage]
})
export class StatusesPageModule {}
