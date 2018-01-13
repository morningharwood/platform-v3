import { NgModule } from '@angular/core';
import { MasterProfileContainerComponent } from './containers/master/component';
import { ResumeContainerComponent } from './containers/resume/component';
import * as profileRoutes from './routes';
import { CommonModule } from '@angular/common';
import { MhPipesModule } from '../pipe/module';
import { ProfileComponentsModule } from './components/module';
import { HamburgerModule } from '../hamburger/module';

export const DECLARE_EXPORT = [
  ResumeContainerComponent,
  MasterProfileContainerComponent,
];

@NgModule({
  declarations: [...DECLARE_EXPORT],
  exports: [...DECLARE_EXPORT],
  imports: [
    CommonModule,
    MhPipesModule,
    profileRoutes.routes,
    ProfileComponentsModule,
    HamburgerModule,
  ],
})
export class ProfileModule {
}

