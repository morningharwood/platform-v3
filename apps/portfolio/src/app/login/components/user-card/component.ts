import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { User } from '@workspace/core/src/user.interface';
import { AuthService } from '@workspace/core/src/auth.service';
import { Go } from '../../../router/actions';
import { Store } from '@ngrx/store';


@Component({
  selector: 'mh-user-card',
  templateUrl: 'component.html',
  styleUrls: [ 'component.scss' ],
})
export class UserCardComponent implements OnInit {
  @Input() public user: User;

  constructor(public auth: AuthService, private store: Store<any>) {
  }

  ngOnInit() {
  }

  public login() {
    this.auth.googleLogin()
        .then(console.log);
  }

  public logout() {
    this.auth.googleLogout()
        .then(console.log);
  }

  public go(path) {
    this.store.dispatch(new Go({ path: [ path ] }));
  }
}
