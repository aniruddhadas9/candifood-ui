import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DisplayRestaurantComponent} from './components/display-restaurant/display-restaurant.component';
import {RestaurantService} from './service/restaurant.service';
import {HttpClientModule} from '@angular/common/http';
import {AppService, MapService} from '@candifood/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from '../../../projects/candifood/core/src/lib/core.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule,
    CoreModule
  ],
  declarations: [
    DisplayRestaurantComponent
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
