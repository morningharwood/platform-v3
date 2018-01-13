import {
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';
import {Folio} from "./interfaces";



@Component({
  selector: 'mh-folio',
  templateUrl: './folio.component.html',
  styleUrls: [
    './folio.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FolioComponent {
  public content: Folio = {
    headline: 'Good Morning Harwood',
    subHeader: 'A digital sandbox created by',
    link: {
      url: '',
      text: 'Matthew Harwood'
    }
  }
}
