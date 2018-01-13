import {
  Component,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';

import { bogo } from '../../../_handies/sorting';
import {
  initalState,
  Item,
  RunningHeader,
} from '../../components/running-head/running-head.content';
import { Observable } from 'rxjs/Observable';
import { pulseData$ } from '../../../_handies/pulse-obs';
import { Go } from '../../../router/actions';


@Component({
  selector: 'mh-master-menu',
  templateUrl: './component.html',
  styleUrls: [ './component.scss' ],
})
export class MasterMenuContainerComponent implements OnInit {
  private state_: RunningHeader;
  public state$: Observable<Item>;

  constructor(private store: Store<any>) {
  }

  public ngOnInit() {
    this.state_ = bogo(initalState);
    this.state$ = pulseData$(this.state_, 'name');
  }

  public go(path) {
    this.store.dispatch(new Go({ path: [ path ] }));
  }
}

