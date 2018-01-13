import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {MasterWorkContainerComponent} from './containers/master/component';
import {DetailWorkContainerComponent} from './containers/detail/component';

export const config: Routes = [
  {
    path: 'work',
    children: [
      {
        path: '',
        component: MasterWorkContainerComponent,
      },
      {
        path: ':slug',
        component: DetailWorkContainerComponent,
      },
    ],
  },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(config);
