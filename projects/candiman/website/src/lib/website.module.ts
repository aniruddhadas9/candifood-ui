import {InjectionToken, Injector, ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
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
import {AppService} from './services/app.service';
import {NoAuthGuardService} from './services/no-auth-guard.service';
import {GoogleAnalyticsService} from './services/google-analytics.service';
import {RouterModule} from '@angular/router';
import {PrivacyComponent} from './components/privacy/privacy.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CoreService} from './services/core.service';
import {FilterPipe} from './services/filter-pipe.service';
import {ChangeLocationModelComponent} from './components/change-location-model/change-location-model.component';
import {ProfileComponent} from './components/profile/profile.component';
import {WebsiteRoutingModule} from './website-routing.module';
import {CorouselComponent} from './components/corousel/corousel.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ContentLoadingComponent} from './components/content-loading/content-loading.component';
import {AutoScrollDirective} from './directives/auto-scroll.directive';
import {ModelComponent} from './components/model/model.component';
import {createCustomElement} from '@angular/elements';
import {NgElementConstructor} from '@angular/elements/src/create-custom-element';
import {CfsInfiniteScrollService} from './services/cfs-infinite-scroll.service';
import {ReadMoreComponent} from './components/read-more/read-more.component';
import {SafeHtmlPipe} from './pipes/safe-html.pipe';

export const WINDOW = new InjectionToken<any>('A reference to the window');

export function windowFactory() {
  return window;
}

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    WebsiteRoutingModule,
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
    AutoScrollDirective,
    ModelComponent,
    ReadMoreComponent,
    SafeHtmlPipe,
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
    ReadMoreComponent,
    AutoScrollDirective,
    SafeHtmlPipe,
  ],
  entryComponents: [
    HeaderComponent,
    FooterComponent,
    AlertsComponent,
    LoginComponent,
    ProfileComponent,
    PrivacyComponent,
    ChangeLocationModelComponent,
    CorouselComponent,
    ContentLoadingComponent,
    ModelComponent,
    ReadMoreComponent
  ]
})
export class WebsiteModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: WebsiteModule,
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
        GoogleAnalyticsService,
        CfsInfiniteScrollService,
        SafeHtmlPipe,
      ]
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: WebsiteModule, private injector: Injector) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }

    this.registerCustomElements();

  }

  // ngDoBootstrap() {
  // }

  registerCustomElements() {
    const cfheader: NgElementConstructor<HeaderComponent> = createCustomElement(HeaderComponent, {injector: this.injector});
    const cffooter: NgElementConstructor<FooterComponent> = createCustomElement(FooterComponent, {injector: this.injector});
    const cfalert: NgElementConstructor<AlertsComponent> = createCustomElement(AlertsComponent, {injector: this.injector});
    const cflogin: NgElementConstructor<LoginComponent> = createCustomElement(LoginComponent, {injector: this.injector});
    const cfprofile: NgElementConstructor<ProfileComponent> = createCustomElement(ProfileComponent, {injector: this.injector});
    const cfprivacy: NgElementConstructor<PrivacyComponent> = createCustomElement(PrivacyComponent, {injector: this.injector});
    const cfchangelocationmodel: NgElementConstructor<ChangeLocationModelComponent> =
      createCustomElement(ChangeLocationModelComponent, {injector: this.injector});
    const cfcorousel: NgElementConstructor<CorouselComponent> = createCustomElement(CorouselComponent, {injector: this.injector});
    const cfcontentloading: NgElementConstructor<ContentLoadingComponent> =
      createCustomElement(ContentLoadingComponent, {injector: this.injector});
    const cfmodel: NgElementConstructor<ModelComponent> = createCustomElement(ModelComponent, {injector: this.injector});

    customElements.define('cf-header', cfheader as any);
    customElements.define('cf-footer', cffooter as any);
    customElements.define('cf-alert', cfalert as any);
    customElements.define('cf-login', cflogin as any);
    customElements.define('cf-profile', cfprofile as any);
    customElements.define('cf-privacy', cfprivacy as any);
    customElements.define('cf-change-location-model', cfchangelocationmodel as any);
    customElements.define('cf-corousel', cfcorousel as any);
    customElements.define('cf-content-loading', cfcontentloading as any);
    customElements.define('cf-model', cfmodel as any);
  }

}
