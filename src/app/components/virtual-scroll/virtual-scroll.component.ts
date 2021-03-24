import { Component, OnInit,ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styles: [
  ]
})

export class VirtualScrollComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  constructor() { }

  ngOnInit(): void {
  }

  principio(){
    this.viewport.scrollToIndex(0);
  }
  medio(){
    this.viewport.scrollToIndex(this.items.length /2 );
  }
  final(){
this.viewport.scrollToIndex(this.items.length);
  }

}
