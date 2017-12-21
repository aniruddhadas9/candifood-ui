import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GeoLocationService} from './service/geo-location.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    GeoLocationService
  ],
  declarations: []
})
export class LocationModule {
}
