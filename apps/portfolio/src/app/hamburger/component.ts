import {
  Component,
  HostBinding,
  HostListener,
  OnChanges,
  OnInit,
} from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import {
  NavigationEnd,
  Router,
} from '@angular/router';
import { filter } from 'rxjs/operators';
import {
  Back,
  Go,
} from '../router/actions';


@Component({
  selector: 'mh-hammy',
  templateUrl: 'component.html',
  styleUrls: [ './component.scss' ],
})
export class HamburgerComponent implements OnInit {
  public open = false;

  constructor(private store: Store<any>,
              private location: Location,
              private router: Router) {
  }

  public ngOnInit() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
    )
        .subscribe((event) => {
          this.open = this.location.path()
                          .includes('/menu');
        });
  }


  @HostListener('click')
  public toggle(): void {
    this.open = !this.open;
    if (!this.open) {
      this.store.dispatch(new Back());
    } else {
      this.store.dispatch(new Go({ path: [ 'menu' ] }));
    }
  }


}
