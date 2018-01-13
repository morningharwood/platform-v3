import {
  ModuleWithProviders,
  NgModule,
} from '@angular/core';
import { StoreNavigateService } from './service';
import { MenuModule } from '../menu/module';
import { ProfileModule } from '../profile/module';
import { LabModule } from '../lab/module';
import { WorkModule } from '../work/module';


@NgModule({
  imports: [
    MenuModule,
    ProfileModule,
    LabModule,
    WorkModule,
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


