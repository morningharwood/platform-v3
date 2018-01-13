import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as RouterActions from '../../../router/actions';
import * as content from '../resume/content/data';
import { selectFeature } from '../../components/video-block/actions/index';

@Component({
  selector: 'mh-master-profile',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class MasterProfileContainerComponent {
  public me = content.me;
  public selectedVideoObs: Store<any>;

  constructor(private store: Store<any>) {
    this.selectedVideoObs = store.select(selectFeature);
  }

  public go(path) {
    this.store.dispatch(new RouterActions.Go({path: [path]}));
  }
}

