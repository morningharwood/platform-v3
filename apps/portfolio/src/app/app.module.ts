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
import {
  config,
} from './router/config';

import { MhPipesModule } from './pipe/module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterEffects } from './router/effects';
import { reducers } from './router/state';
import { HamburgerModule } from './hamburger/module';
import { ApplicationRoutes } from './router/module';


@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    ApplicationRoutes,
    AngularFireModule.initializeApp(environment.firebase, 'portfolio'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    CoreModule.forRoot(),
    RouterModule.forRoot(config),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ RouterEffects ]),
    MhPipesModule,
    !environment.production
      ? StoreDevtoolsModule.instrument()
      : [],
    StoreRouterConnectingModule,
    HamburgerModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
