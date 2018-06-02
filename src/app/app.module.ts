import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RestaurantModule} from './restaurant/restaurant.module';
import {HomeModule} from './home/home.module';
import {AgmCoreModule} from '@agm/core';
import {CoreModule} from '@candifood/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    CoreModule.forRoot(),
    HomeModule,
    RestaurantModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBMIoVYsqVdrlm_IwdKSkLEhpMH7JtEIT8',
      libraries: [
        'places'
      ]
    })
  ],
  providers: [
    /*{
      provide: APP_INITIALIZER,
      useFactory: appInitFactory,
      deps: [AppInitService],
      multi: true
    }*/
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
