import {InjectionToken, ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {AlertService} from './services/alert.service';
import {AppInitService} from './services/app-init.service';
import {AuthGuardService} from './services/auth-guard.service';
import {UserService} from './services/user.service';
import {AlertsComponent} from './components/alerts/alerts.component';
import {LoginComponent} from './components/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {EncryptionService} from './services/encryption.service';
import {MapService} from './services/map.service';
import {HttpClientModule} from '@angular/common/http';
import {AppService} from './services/app.service';
import {NoAuthGuardService} from './services/no-auth-guard.service';
import {GoogleAnalyticsService} from './services/google-analytics.service';
import {RouterModule} from '@angular/router';
import { PrivacyComponent } from './components/privacy/privacy.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CoreService} from './services/core.service';
import {FilterPipe} from './services/filter-pipe.service';
import {ChangeLocationModelComponent} from './components/change-location-model/change-location-model.component';
import {ProfileComponent} from './components/profile/profile.component';
import {CoreRoutingModule} from './core-routing.module';
import {CorouselComponent} from './components/corousel/corousel.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { ContentLoadingComponent } from './components/content-loading/content-loading.component';
import { AutoScrollDirective } from './directives/auto-scroll.directive';

export const WINDOW = new InjectionToken<any>('A reference to the window');

export function windowFactory() {
  return window;
}

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    CoreRoutingModule,
    FontAwesomeModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    AlertsComponent,
    LoginComponent,
    ProfileComponent,
    PrivacyComponent,
    ChangeLocationModelComponent,
    CorouselComponent,
    FilterPipe,
    ContentLoadingComponent,
    AutoScrollDirective
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AlertsComponent,
    LoginComponent,
    ProfileComponent,
    PrivacyComponent,
    ChangeLocationModelComponent,
    CorouselComponent,
    ContentLoadingComponent,
    AutoScrollDirective,
    FontAwesomeModule
  ],
  entryComponents: [
    ChangeLocationModelComponent
  ]
})
export class CoreModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        AppService,
        AlertService,
        AppInitService,
        AuthGuardService,
        CoreService,
        EncryptionService,
        MapService,
        NoAuthGuardService,
        {
          provide: WINDOW,
          useFactory: windowFactory
        },
        UserService,
        GoogleAnalyticsService
      ]
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
