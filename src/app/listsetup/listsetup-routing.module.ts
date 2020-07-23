import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListsetupPage } from './listsetup.page';

const routes: Routes = [
  {
    path: '',
    component: ListsetupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListsetupPageRoutingModule {}
