import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import * as RouterActions from '../../../router/actions';

@Component({
  selector: 'mh-detail-work',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class DetailWorkContainerComponent {
  constructor(private store: Store<any>) {
  }

  public go(path) {
    this.store.dispatch(new RouterActions.Go({path: [path]}));
  }

  public back() {
    this.store.dispatch(new RouterActions.Back());
  }
}

