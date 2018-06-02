
import { Directive, ElementRef, HostListener, Inject, Input, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { Post } from '../../interfaces/post';
// import * as fromAction from '../../actions/post';
// import { postFactory } from '../../interfaces/post/post';
// import { isPlatformBrowser } from '@angular/common';
import { Store } from '@ngrx/store';

@Directive({
  selector: '[appArticleEdit]'
})
export class ArticleEditDirective implements OnInit {
  @Input() public post: Post;
  @Input() public pointer: string[];
  private _platformId: string;
  private _el: any;
  private tooltipContainer: any;
  private previousState: string;

  constructor(
    @Inject(PLATFORM_ID) platformId: string,
    private renderer: Renderer2,
    private ref: ElementRef,
    private store: Store<any>
  ) {}

  public ngOnInit(): void {
    // if (!isPlatformBrowser(this._platformId)) {
    //   return;
    // }
  }

  @HostListener('focus', ['$event'])
  public memoize(event: KeyboardEvent) {
    this.previousState = (event.target as any).innerText;
  }

  @HostListener('blur', ['$event'])
  public diffMemo(event: KeyboardEvent) {
    if (this.previousState === (event.target as any).innerText) {
      console.log('nahh');
      this.clear();

      return false;
    }

    this.post[this.pointer[0]][this.pointer[1]] = (event.target as any).innerText;
    // this.store.dispatch(
    //   new fromAction.Update({
    //     post: {
    //       id: this.post.id,
    //       changes: this.post
    //     }
    //   })
    // );
  }

  public submit() {}

  public clear() {
    this.previousState = undefined;
  }

  private addToolTip() {
    // this.tooltipContainer = this.renderer.createElement('button');
    // const text = this.renderer.createText('Hello world!');
    // console.log(this.tooltipContainer, text);
    // this.renderer.appendChild(this.tooltipContainer, text);
    // const el = this.renderer.selectRootElement(this.ref).nativeElement;
    // this.renderer.appendChild(el, this.tooltipContainer);
    // this.renderer.addClass(this.tooltipContainer, 'wild');
  }

  private removeToolTip() {
    // const el = this.renderer.selectRootElement(this.ref).nativeElement;
    // this.renderer.removeChild(el, this.tooltipContainer);
  }
}
