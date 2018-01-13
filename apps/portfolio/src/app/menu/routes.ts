import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {MasterMenuContainerComponent} from "./containers/master/component";



export const config: Routes = [
  {
    path: 'menu',
    children: [
      {
        path: '',
        component: MasterMenuContainerComponent,
      },
    ],
  },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(config);
