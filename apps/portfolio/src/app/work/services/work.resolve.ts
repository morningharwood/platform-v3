// import { Injectable } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { selectAll } from '../reducers/post';
// import { Observable } from 'rxjs/Observable';
// import { Resolve } from '@angular/router';
// import { Post } from '../interfaces/post';
// import 'rxjs/add/observable/of';
// import { AuthService } from '@workspace/core/src/auth.service';
//
//
// @Injectable()
// export class WorkDataResolve implements Resolve<any> {
//   constructor(private store: Store<any>, private auth: AuthService) {}
//
//   resolve(): Observable<Post[]> | any {
//     this.store.select(selectAll).subscribe(console.log);
//     return Observable.of({
//       posts: this.store.select(selectAll),
//       user: this.auth.user$
//     });
//   }
// }
