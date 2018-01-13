import {
  ModuleWithProviders,
  NgModule,
} from '@angular/core';
import { StoreNavigateService } from './service';
import { MenuModule } from '../menu/module';
import { ProfileModule } from '../profile/module';
import { LabModule } from '../lab/module';
import { WorkModule } from '../work/module';
import { LoginRouteModule } from '../login/module';
import { AdminRouteModule } from '../admin/module';


@NgModule({
  imports: [
    MenuModule,
    ProfileModule,
    LabModule,
    WorkModule,
    AdminRouteModule,
    LoginRouteModule,
  ],
})
export class ApplicationRoutes {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: ApplicationRoutes,
      providers: [ StoreNavigateService ],
    };
  }
}


