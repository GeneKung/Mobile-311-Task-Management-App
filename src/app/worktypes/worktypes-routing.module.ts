import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkTypesPage } from './worktypes.page';

const routes: Routes = [
  {
    path: '',
    component: WorkTypesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkTypesPageRoutingModule {}
