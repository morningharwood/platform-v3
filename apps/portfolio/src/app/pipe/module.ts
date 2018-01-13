import { NgModule } from '@angular/core';
import { SupSubPipe } from './sup_sub';
import { CommaToAndPipe } from './comma';


const DECLARE_EXPORT = [
  SupSubPipe,
  CommaToAndPipe,
];

@NgModule({
  imports: [],
  exports: [...DECLARE_EXPORT],
  declarations: [...DECLARE_EXPORT],
  providers: [],
})
export class MhPipesModule {
}
