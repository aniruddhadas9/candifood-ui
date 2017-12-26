import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GeoLocationService} from './service/geo-location.service';
import {CoreModule} from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  providers: [
    GeoLocationService
  ],
  declarations: []
})
export class LocationModule {
}
