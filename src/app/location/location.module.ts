import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoreModule} from '../core/core.module';
import {GoogleMapsAPIWrapper} from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  providers: [
    GoogleMapsAPIWrapper
  ],
  declarations: [
  ],
  exports: [
  ]
})
export class LocationModule {
}
