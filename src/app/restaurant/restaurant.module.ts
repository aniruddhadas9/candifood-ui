import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RestaurantsComponent} from './components/restaurants/restaurants.component';
import {RestaurantService} from './service/restaurant.service';
import {HttpClientModule} from '@angular/common/http';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {WebsiteModule} from '@candiman/website';
import {ReviewsComponent} from './components/reviews/reviews.component';
import {PhotosComponent} from './components/photos/photos.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule,
    InfiniteScrollModule,
    WebsiteModule
  ],
  declarations: [
    RestaurantsComponent,
    ReviewsComponent,
    PhotosComponent,
  ],
  providers: [
    RestaurantService
  ],
  exports: [
    RestaurantsComponent,
    ReviewsComponent,
    PhotosComponent,
  ]
})
export class RestaurantModule {
}
