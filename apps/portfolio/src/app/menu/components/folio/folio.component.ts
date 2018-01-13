import {
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Folio } from './interfaces';
import { Go } from '../../../router/actions';
import { Store } from '@ngrx/store';


@Component({
  selector: 'mh-folio',
  templateUrl: './folio.component.html',
  styleUrls: [
    './folio.component.scss',
  ],
})
export class FolioComponent {
  constructor(private store: Store<any>) {
  }

  public content: Folio = {
    headline: 'Good Morning Harwood',
    subHeader: 'A digital sandbox created by',
    link: {
      url: '',
      text: 'Matthew Harwood',
    },
  };

  public go() {
    this.store.dispatch(new Go({ path: [ 'admin' ] }));
  }
}
