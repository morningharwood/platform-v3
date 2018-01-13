import { NgModule } from '@angular/core';
import { LoginContainerMasterComponent } from './container/master/component';
import { routes } from './routes';
import { CoreModule } from '@workspace/core';
import { GoogleLoginComponent } from './components/google-login/component';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './components/user-card/component';

export const EXPORTS_DECLARATIONS = [LoginContainerMasterComponent, GoogleLoginComponent, UserCardComponent];

@NgModule({
  imports: [CommonModule, routes, CoreModule.forRoot()],
  exports: [...EXPORTS_DECLARATIONS],
  declarations: [...EXPORTS_DECLARATIONS],
  providers: []
})
export class LoginRouteModule {}
