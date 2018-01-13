import { NgModule } from '@angular/core';
import { LoginContainerMasterComponent } from './container/master/component';
import { routes } from './routes';
import { CoreModule } from '@workspace/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './components/user-card/component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';


export const EXPORTS_DECLARATIONS = [
  LoginContainerMasterComponent,
  UserCardComponent,
];

@NgModule({
  imports: [
    CommonModule,
    routes,
    CoreModule.forRoot(),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
  ],
  exports: [ ...EXPORTS_DECLARATIONS ],
  declarations: [ ...EXPORTS_DECLARATIONS ],
  providers: [],
})
export class LoginRouteModule {
}
