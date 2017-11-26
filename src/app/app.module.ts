import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {RestaurantModule} from './restaurant/restaurant.module';
import {LocationModule} from './location/location.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    RestaurantModule,
    LocationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
