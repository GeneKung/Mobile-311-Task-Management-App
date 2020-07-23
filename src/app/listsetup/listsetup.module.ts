import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListsetupPageRoutingModule } from './listsetup-routing.module';

import { ListsetupPage } from './listsetup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListsetupPageRoutingModule
  ],
  declarations: [ListsetupPage]
})
export class ListsetupPageModule {}
