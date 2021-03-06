import {
  Component,
  OnInit,
} from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent implements OnInit {
  constructor(private db: AngularFirestore) {
  }

  ngOnInit() {
    console.log(this.db);
  }
}
