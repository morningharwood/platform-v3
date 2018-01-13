import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {MasterLabContainerComponent} from './containers/master/component';
import {DetailLabContainerComponent} from './containers/detail/component';

export const config: Routes = [
  {
    path: 'lab',
    children: [
      {
        path: '',
        component: MasterLabContainerComponent,
      },
      {
        path: ':slug',
        component: DetailLabContainerComponent,
      },
    ],
  },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(config);
