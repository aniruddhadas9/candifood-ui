import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DisplayRestaurantComponent} from './components/display-restaurant/display-restaurant.component';
import {RestaurantService} from './service/restaurant.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    DisplayRestaurantComponent,
  ],
  providers: [
    RestaurantService
  ],
  exports: [
    DisplayRestaurantComponent,
  ]
})
export class RestaurantModule {
}
