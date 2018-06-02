import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post';
// import * as fromAction from '../../actions/post';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-article-admin',
  templateUrl: 'article-admin.component.html',
  styleUrls: ['./article-admin.component.scss']
})
export class ArticleAdminComponent implements OnInit {
  @Input() post: Post;

  constructor(private store: Store<any>) {}

  ngOnInit() {}

  public remove(): void {
    console.log(this.post);
    // this.store.dispatch(new fromAction.Remove({ id: this.post.id }));
  }
}
