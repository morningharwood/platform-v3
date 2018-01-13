import { NgModule } from '@angular/core';

import { HamburgerComponent } from './component';
import { CommonModule } from '@angular/common';

const DECLARE_EXPORT = [
  HamburgerComponent
];

@NgModule({
  exports: [...DECLARE_EXPORT],
  declarations: [...DECLARE_EXPORT],
  imports: [CommonModule]
})
export class HamburgerModule {
}
