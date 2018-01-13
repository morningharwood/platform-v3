import {
  Directive,
  HostListener,
  Input,
} from '@angular/core';
import { StoreNavigateService } from '../service';
import { EventType } from '../../../../../../libs/event-type';


@Directive({
  selector: '[lbNavigate]',
})
export class NavigateDirective {
  @Input() route: string;

  constructor(private navigate: StoreNavigateService) {
  }

  @HostListener(EventType.CLICK)
  public click(): void {
    this.navigate.go(this.route);
  }
}
