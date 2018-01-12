import { NgModule } from '@angular/core';
import { AdminContainerMasterComponent } from './container/master/component';
import { routes } from './routes';
import { CoreModule } from '@workspace/core';

export const EXPORTS_DECLARATIONS = [AdminContainerMasterComponent];

@NgModule({
  imports: [routes, CoreModule.forRoot()],
  exports: [...EXPORTS_DECLARATIONS],
  declarations: [...EXPORTS_DECLARATIONS],
  providers: []
})
export class AdminRouteModule {}
