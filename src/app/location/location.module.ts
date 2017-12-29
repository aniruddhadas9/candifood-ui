import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoreModule} from '../core/core.module';
import {GoogleMapsAPIWrapper} from '@agm/core';
import { GoogleMapAutocompleteDirective } from './directives/google-map-autocomplete.directive';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  providers: [
    GoogleMapsAPIWrapper
  ],
  declarations: [
  GoogleMapAutocompleteDirective],
  exports: [
  ]
})
export class LocationModule {
}
