import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    // WebsiteModule.forRoot({
    //   loginUrl: environment.restUrl + '/user/login',
    //   alertDelayInSeconds: 7
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
