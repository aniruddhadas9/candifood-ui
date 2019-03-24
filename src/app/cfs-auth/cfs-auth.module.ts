import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NbAlertModule, NbButtonModule, NbCheckboxModule, NbInputModule, NbLayoutModule} from "@nebular/theme";
import {AuthRoutingModule} from "../../../projects/candiman/auth/src/lib/auth-routing.module";

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    // NbLayoutModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
  ],
  providers: [

  ]
})
export class CfsAuthModule {
}
