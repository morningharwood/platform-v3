import { NgModule } from '@angular/core';
import { MasterWorkContainerComponent } from './containers/master/component';
import { DetailWorkContainerComponent } from './containers/detail/component';
import * as workRoutes from './routes';

export const DECLARE_EXPORT = [
  DetailWorkContainerComponent,
  MasterWorkContainerComponent,
];

@NgModule({
  declarations: [...DECLARE_EXPORT],
  exports: [...DECLARE_EXPORT],
  imports: [
    workRoutes.routes,
  ],
})
export class WorkModule {
}

