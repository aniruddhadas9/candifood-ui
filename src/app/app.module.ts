import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {RestaurantModule} from './restaurant/restaurant.module';
import {LocationModule} from './location/location.module';
import {SafeHtmlPipe} from './pipes/safe-html.pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {appInitFactory, AppInitService} from './core/services/app-init.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    CoreModule,
    RestaurantModule,
    LocationModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitFactory,
      deps: [AppInitService],
      multi: true
    },
    SafeHtmlPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
