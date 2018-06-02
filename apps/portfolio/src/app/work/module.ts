import { NgModule } from '@angular/core';
import { MasterWorkContainerComponent } from './containers/master/component';
import { DetailWorkContainerComponent } from './containers/detail/component';
import * as workRoutes from './routes';
import { ArticleHeaderComponent } from './components/article-header/article-header.component';
import { ArticleAdminComponent } from './components/article-admin/article-admin.component';
import { ArticleEditDirective } from './components/article-edit/article-edit.directive';
import { CommonModule } from "@angular/common";

export const DECLARE_EXPORT = [
  DetailWorkContainerComponent,
  MasterWorkContainerComponent,
  ArticleHeaderComponent,
  ArticleAdminComponent,
  ArticleEditDirective
];

@NgModule({
  declarations: [...DECLARE_EXPORT],
  exports: [...DECLARE_EXPORT],
  imports: [
    CommonModule,
    workRoutes.routes,
  ],
})
export class WorkModule {
}

