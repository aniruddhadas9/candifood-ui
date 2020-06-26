import {BrowserModule} from '@angular/platform-browser';
import {InjectionToken, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RestaurantModule} from './restaurant/restaurant.module';
import {HomeModule} from './home/home.module';
import {AgmCoreModule} from '@agm/core';
import {HttpInterceptorService, WebsiteModule} from '@candiman/website';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {environment} from '../environments/environment';
import {HTTP_INTERCEPTORS} from '@angular/common/http';


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
    WebsiteModule.forRoot({
      restUrl: environment.restUrl,
      loginUrl: environment.restUrl + '/authentication/login',
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
    },
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true}
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
export class AppModule {
}
