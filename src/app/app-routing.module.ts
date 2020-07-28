import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'support',
    loadChildren: () => import('./support/support.module').then(m => m.SupportPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cache',
    loadChildren: () => import('./cache/cache.module').then( m => m.CachePageModule)
  },
  {
    path: 'tasks',
    loadChildren: () => import('./tasks/tasks.module').then( m => m.TasksPageModule)
  },
  {
    path: 'listsetup',
    loadChildren: () => import('./listsetup/listsetup.module').then( m => m.ListsetupPageModule)
  },
  {
    path: 'status',
    loadChildren: () => import('./status/status.module').then( m => m.StatusPageModule)
  },
  {
    path: 'worktypes',
    loadChildren: () => import('./worktypes/worktypes.module').then( m => m.WorkTypesPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then( m => m.UsersPageModule)
  },  {
    path: 'createtask',
    loadChildren: () => import('./createtask/createtask.module').then( m => m.CreatetaskPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
