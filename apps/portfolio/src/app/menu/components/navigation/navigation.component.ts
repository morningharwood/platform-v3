import { Component, ChangeDetectionStrategy } from '@angular/core';
import { data, Navigation } from './navigation.content';

@Component({
  selector: 'mh-menu-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['navigation.component.scss'],
})
export class NavigationComponent {
  public data:Navigation = data;
}
