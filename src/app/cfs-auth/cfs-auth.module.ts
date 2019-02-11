import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthModule} from '@candiman/auth';
import {WINDOW, windowFactory} from "../../../projects/candiman/auth/src/lib/auth.module";
import {NbAlertModule, NbButtonModule, NbCheckboxModule, NbInputModule, NbLayoutModule} from "@nebular/theme";
import {AuthRoutingModule} from "../../../projects/candiman/auth/src/lib/auth-routing.module";

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    AuthModule
  ],
  providers: [
    {
      provide: WINDOW,
      useFactory: windowFactory
    }
  ]
})
export class CfsAuthModule {
}
