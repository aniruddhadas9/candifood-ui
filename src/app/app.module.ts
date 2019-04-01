import {BrowserModule} from '@angular/platform-browser';
import {InjectionToken, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RestaurantModule} from './restaurant/restaurant.module';
import {HomeModule} from './home/home.module';
import {AgmCoreModule} from '@agm/core';
import {WebsiteModule} from '@candiman/website';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {environment} from '../environments/environment';
import {NbAlertModule, NbButtonModule, NbCheckboxModule, NbInputModule, NbLayoutModule} from "@nebular/theme";


export const Window = new InjectionToken<any>('A reference to the window');

export function windowFactory() {
  return window;
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    WebsiteModule.forRoot({
      loginUrl: environment.restUrl + '/user/login',
      alertDelayInSeconds: 7
    }),
    HomeModule,
    RestaurantModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBMIoVYsqVdrlm_IwdKSkLEhpMH7JtEIT8',
      libraries: [
        'places'
      ]
    }),
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: Window,
      useFactory: windowFactory
    }
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
