import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AdminContainerMasterComponent } from './container/master/component';
import { AdminGuard } from '@workspace/core/src/admin.guard';

export const config: Routes = [
  {
    path: 'admin',
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        component: AdminContainerMasterComponent
      }
    ]
  }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(config);
