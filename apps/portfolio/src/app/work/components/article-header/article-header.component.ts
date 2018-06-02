import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Post, PostContent } from '../../interfaces/post';

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleHeaderComponent implements OnInit {
  @Input() post: Post;
  @Input() index: number;

  constructor() {}

  ngOnInit() {}
}
