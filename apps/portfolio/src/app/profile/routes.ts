import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MasterProfileContainerComponent } from './containers/master/component';
import { ResumeContainerComponent } from './containers/resume/component';
import { MasterMenuContainerComponent } from '../menu/containers/master/component';

export const config: Routes = [
  {
    path: 'profile',
    children: [
      {
        path: 'resume',
        component: ResumeContainerComponent,
      },
      {
        path: '',
        component: MasterProfileContainerComponent,
        children: [
          {
            path: '',
            component: ResumeContainerComponent,
            outlet: 'resume'
          },
          // {
          //   path: 'menu',
          //   component: MasterMenuContainerComponent,
          // }
        ]
      },
    ],
  },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(config);
