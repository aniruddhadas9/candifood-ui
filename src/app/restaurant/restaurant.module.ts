import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DisplayRestaurantComponent} from './components/display-restaurant/display-restaurant.component';
import {RestaurantService} from './service/restaurant.service';
import {HttpClientModule} from '@angular/common/http';
import {ConfigService} from '../core/services/config.service';
import {MapService} from '../location/service/map.service';
import {AppService} from '../services/app.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    DisplayRestaurantComponent,
  ],
  providers: [
    AppService,
    RestaurantService,
    ConfigService,
    MapService
  ],
  exports: [
    DisplayRestaurantComponent,
  ]
})
export class RestaurantModule {
}
