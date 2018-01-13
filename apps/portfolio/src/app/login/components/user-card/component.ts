import { Component, Input, OnInit } from '@angular/core';
import { User } from '@workspace/core/src/user.interface';

@Component({
  selector: 'mh-user-card',
  templateUrl: 'component.html',
  styleUrls: ['component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() public user: User;

  constructor() {}

  ngOnInit() {}
}
