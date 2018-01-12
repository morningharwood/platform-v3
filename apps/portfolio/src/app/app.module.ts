import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { CoreModule } from '@workspace/core/';


@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase, 'portfolio'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    CoreModule.forRoot(),
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
