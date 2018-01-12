import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { CoreModule } from '@workspace/core/';
import { RouterModule } from '@angular/router';
import { init } from './routes/config';
import { LoginRouteModule } from './login/module';
import { AdminRouteModule } from './admin/module';


@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),

    AdminRouteModule,
    LoginRouteModule,
    AngularFireModule.initializeApp(environment.firebase, 'portfolio'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    CoreModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
      },
    ]),
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
