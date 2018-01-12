import {
  ModuleWithProviders,
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@workspace/core/src/auth.service';
import { AdminGuard } from '@workspace/core/src/admin.guard';

@NgModule({
  imports: [CommonModule]
})
export class CoreModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        AuthService,
        AdminGuard
      ]
    };
  }
}
