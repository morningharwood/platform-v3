import { Component, OnInit } from '@angular/core';
import { AuthService } from '@workspace/core/src/auth.service';

@Component({
  selector: 'mh-login-container-master',
  templateUrl: 'component.html',
  styleUrls: ['component.scss']
})
export class LoginContainerMasterComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit() {}
}
