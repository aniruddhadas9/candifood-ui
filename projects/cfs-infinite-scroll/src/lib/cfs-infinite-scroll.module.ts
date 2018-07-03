import { NgModule } from '@angular/core';
import { CfsInfiniteScrollComponent } from './components/cfs-infinite-scroll.component';
import { CfsInfiniteScrollDirective } from './directives/cfs-infinite-scroll.directive';

@NgModule({
  imports: [],
  declarations: [
    CfsInfiniteScrollComponent,
    CfsInfiniteScrollDirective
  ],
  exports: [
    CfsInfiniteScrollComponent,
    CfsInfiniteScrollDirective
  ]
})
export class CfsInfiniteScrollModule {
}
