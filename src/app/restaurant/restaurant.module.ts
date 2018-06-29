import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DisplayRestaurantComponent} from './components/display-restaurant/display-restaurant.component';
import {RestaurantService} from './service/restaurant.service';
import {HttpClientModule} from '@angular/common/http';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import { CoreModule } from '@candifood/core';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule,
    InfiniteScrollModule,
    CoreModule
  ],
  declarations: [
    DisplayRestaurantComponent,
  ],
  providers: [
    RestaurantService,
  ],
  exports: [
    DisplayRestaurantComponent
  ]
})
export class RestaurantModule {
}
