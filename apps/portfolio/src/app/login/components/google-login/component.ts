import {
  Component,
  HostListener,
  OnInit,
} from '@angular/core';
import { EventType } from '@workspace/event-type';
import { AuthService } from '@workspace/core/src/auth.service';


@Component({
  selector: 'mh-google-login',
  templateUrl: 'component.html',
  styleUrls: [ 'component.scss' ],
})

export class GoogleLoginComponent implements OnInit {
  constructor(public auth: AuthService) {
  }

  ngOnInit() {
  }

  // @HostListener(EventType.CLICK)
  public login() {
    this.auth.googleLogin().then(console.log)
  }
}
