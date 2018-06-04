import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DisplayRestaurantComponent} from './components/display-restaurant/display-restaurant.component';
import {RestaurantService} from './service/restaurant.service';
import {HttpClientModule} from '@angular/common/http';
import {AppService, CoreModule, MapService} from '@candifood/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ScrollingModule} from '@angular/cdk-experimental';
import {VirtualScrollDemoComponent} from './components/virtual-scroll/virtual-scroll-demo';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule,
    CoreModule,
    ScrollingModule,
  ],
  declarations: [
    DisplayRestaurantComponent,
    VirtualScrollDemoComponent
  ],
  providers: [
    AppService,
    RestaurantService,
    MapService
  ],
  exports: [
    DisplayRestaurantComponent
  ]
})
export class RestaurantModule {
}
