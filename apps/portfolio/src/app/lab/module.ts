import { NgModule } from '@angular/core';
import { MasterLabContainerComponent } from './containers/master/component';
import { DetailLabContainerComponent } from './containers/detail/component';
import * as workRoutes from './routes';

export const DECLARE_EXPORT = [
  DetailLabContainerComponent,
  MasterLabContainerComponent,
];

@NgModule({
  declarations: [...DECLARE_EXPORT],
  exports: [...DECLARE_EXPORT],
  imports: [
    workRoutes.routes,
  ],
})
export class LabModule {
}

