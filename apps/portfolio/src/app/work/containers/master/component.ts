import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import * as RouterActions from "../../../router/actions";
import { Observable } from "rxjs/Observable";
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "@workspace/core/src/auth.service";
import { AngularFirestore } from "angularfire2/firestore";
import { postFactory } from "../../interfaces/post/post";
import { nikePost } from "../../articles/nike-jordan";
import { targetPost } from "../../articles/target";
import { insightPost } from "../../articles/insights";
import { facebookPost } from "../../articles/facebook-pillow";
import { applePost } from "../../articles/apple-watch";
import { uberPost } from "../../articles/uber";
import { googleAgoraphobicPost, googleEyesPost} from '../../articles/google'
@Component({
  selector: "mh-master-work",
  templateUrl: "./component.html",
  styleUrls: ["./component.scss"]
})
export class MasterWorkContainerComponent {
  public works: any;
  public userObs: Observable<any>;

  constructor(
    private store: Store<any>,
    private route: ActivatedRoute,
    public auth: AuthService,
    private afs: AngularFirestore
  ) {
    this.works = [uberPost,googleEyesPost,googleAgoraphobicPost,  nikePost, targetPost, insightPost, facebookPost, applePost];
    console.log(this.works);
    // this.userObs = this.route.snapshot.data.work.user;
  }

  public go(path) {
    this.store.dispatch(new RouterActions.Go({ path: [path] }));
  }

  public trackByWorkId(index: number, item: any): string {
    return item.id;
  }
}

