import {InjectionToken, ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {ForgetPasswordComponent} from './components/forget-password/forget-password.component';
import {ResetPasswordComponent} from './components/reset-password/reset-password.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NbAlertModule, NbButtonModule, NbCheckboxModule, NbInputModule, NbLayoutModule} from '@nebular/theme';
import {NbAuthModule, NbAuthSocialLink, NbOAuth2AuthStrategy, NbOAuth2ResponseType, NbPasswordAuthStrategy} from '@nebular/auth';
import {AuthRoutingModule} from './auth-routing.module';
import {AuthServiceConfig, FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider} from 'angularx-social-login';
import {NG_GAPI_CONFIG} from "./services/google/google-api.service";
import {NgGapiClientConfig} from "./services/google/google-api-config.service";

export interface Environment {
  restUrl?: string;
  alertDelayInSeconds?: number;
  loginUrl: string;
}

export const WINDOW = new InjectionToken<any>('A reference to the window');

export function windowFactory() {
  return window;
}

const gapiClientConfig: NgGapiClientConfig = {
  client_id: '229810777942-v9f8u7mla4k621h9oav2n8hranl5ck7k.apps.googleusercontent.com',
  discoveryDocs: ['https://analyticsreporting.googleapis.com/$discovery/rest?version=v4'],
  scope: [
    'https://www.googleapis.com/auth/analytics.readonly',
    'https://www.googleapis.com/auth/analytics'
  ].join(' ')
};


export interface NbAuthSocialLink {
  link?: string;
  url?: string;
  target?: string;
  title?: string;
  icon?: string;
}


const authServiceConfig = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('229810777942-v9f8u7mla4k621h9oav2n8hranl5ck7k.apps.googleusercontent.com')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('Facebook-App-Id')
  },
  {
    id: LinkedInLoginProvider.PROVIDER_ID,
    provider: new LinkedInLoginProvider('LinkedIn-client-Id', false, 'en_US')
  }
]);

export function provideConfig() {
  return authServiceConfig;
}


const socialLinks: NbAuthSocialLink[] = [
  {
    url: 'https://github.com/akveo/nebular',
    target: '_blank',
    icon: 'socicon-github',
  },
  {
    url: 'https://www.facebook.com/akveo/',
    target: '_blank',
    icon: 'socicon-facebook',
  },
  {
    url: 'https://twitter.com/akveo_inc',
    target: '_blank',
    icon: 'socicon-twitter',
  },
];

export const defaultSettings: any = {
  forms: {
    login: {
      redirectDelay: 500, // delay before redirect after a successful login, while success message is shown to the user
      strategy: 'email',  // strategy id key.
      rememberMe: true,   // whether to show or not the `rememberMe` checkbox
      showMessages: {     // show/not show success/error messages
        success: true,
        error: true,
      },
      socialLinks: socialLinks, // social links at the bottom of a page
    },
    register: {
      redirectDelay: 500,
      strategy: 'email',
      showMessages: {
        success: true,
        error: true,
      },
      terms: true,
      socialLinks: socialLinks,
    },
    requestPassword: {
      redirectDelay: 500,
      strategy: 'email',
      showMessages: {
        success: true,
        error: true,
      },
      socialLinks: socialLinks,
    },
    resetPassword: {
      redirectDelay: 500,
      strategy: 'email',
      showMessages: {
        success: true,
        error: true,
      },
      socialLinks: socialLinks,
    },
    logout: {
      redirectDelay: 500,
      strategy: 'email',
    },
    validation: {
      password: {
        required: true,
        minLength: 4,
        maxLength: 50,
      },
      email: {
        required: true,
      },
      fullName: {
        required: false,
        minLength: 4,
        maxLength: 50,
      },
    },
  },
};


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbLayoutModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    AuthRoutingModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint: 'http://localhost:8080',
          login: {
            endpoint: '/user/login',
            method: 'post',
          },
          register: {
            endpoint: '/auth/sign-up',
            method: 'post',
          },
          logout: {
            endpoint: '/auth/sign-out',
            method: 'post',
          },
          requestPass: {
            endpoint: '/auth/request-pass',
            method: 'post',
          },
          resetPass: {
            endpoint: '/auth/reset-pass',
            method: 'post',
          },
        }),
        NbOAuth2AuthStrategy.setup({
          name: 'google',
          clientId: '229810777942-v9f8u7mla4k621h9oav2n8hranl5ck7k.apps.googleusercontent.com',
          clientSecret: '',
          authorize: {
            endpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
            responseType: NbOAuth2ResponseType.TOKEN,
            scope: gapiClientConfig.scope,
            redirectUri: 'http://localhost:4200/example/oauth2/callback',
          },
        }),
      ],
      forms: defaultSettings,
    }),
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent
  ]
})
export class AuthModule {
  public static forRoot(environment: Environment): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [
        {
          provide: WINDOW,
          useFactory: windowFactory
        },
        {
          provide: 'environment',
          useValue: environment
        },
        {
          provide: NG_GAPI_CONFIG,
          useValue: gapiClientConfig
        },
        {
          provide: AuthServiceConfig,
          useFactory: provideConfig
        }
      ]
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: AuthModule) {
    console.log('inside the auth module|%o', WINDOW);
    if (parentModule) {
      throw new Error(
        'AuthModule is already loaded. Import it in the AppModule only');
    }
  }

}
