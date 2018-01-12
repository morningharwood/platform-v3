import { Routes } from '@angular/router';

export const init: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  }
];
