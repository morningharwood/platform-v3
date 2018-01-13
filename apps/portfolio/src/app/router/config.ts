
import { Routes } from '@angular/router';



export const config: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'menu',
  },
  // {
  //   path: '**',
  //   component: ErrorMasterComponent,
  // },
];

export enum RoutesName {
  PROFILE = 'profile',
  MENU = 'menu',
  WORK = 'work',
}
