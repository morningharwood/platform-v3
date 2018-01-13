import {
  ModuleWithProviders,
  NgModule,
} from '@angular/core';
import { StoreNavigateService } from './service';
import { MenuModule } from '../menu/module';
import { ProfileModule } from '../profile/module';


@NgModule({
  imports: [
    MenuModule,
    ProfileModule,
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


