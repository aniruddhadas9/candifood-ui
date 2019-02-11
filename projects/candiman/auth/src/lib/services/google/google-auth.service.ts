import {Injectable} from '@angular/core';
import {GoogleApiService} from './google-api.service';
import {Observable} from 'rxjs/internal/Observable';
import {mergeMap} from 'rxjs/operators';
import {of} from 'rxjs/internal/observable/of';
import {Observer} from 'rxjs/internal/types';
import GoogleAuth = gapi.auth2.GoogleAuth;

interface ClientConfig {
  client_id?: string;
  cookie_policy?: string;
  scope?: string;
  fetch_basic_profile?: boolean;
  hosted_domain?: string;
  openid_realm?: string;
  ux_mode?: "popup" | "redirect";
  redirect_uri?: string;
}


@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {

  private googleAuth: GoogleAuth = undefined;

  constructor(
    private googleApi: GoogleApiService
  ) {
    this.googleApi.onLoad().subscribe(() => {
      this.loadGapiAuth();
    });
  }

  public getAuth(newInstance = false): Observable<GoogleAuth> {
    if (!this.googleAuth || newInstance) {
      return this.googleApi.onLoad()
        .pipe(
          mergeMap(() => this.loadGapiAuth())
        );
    }
    return of(this.googleAuth);
  }

  private loadGapiAuth(): Observable<GoogleAuth> {
    return new Observable((observer: Observer<GoogleAuth>) => {
      (window as any).gapi.load('auth2', () => {
        (window as any).gapi.auth2.init(this.googleApi.getConfig().getClientConfig()).then((auth: GoogleAuth) => {
          this.googleAuth = auth;
          observer.next(auth);
          observer.complete();
        }).catch(err => {
          observer.error(err);
        });
      });
    });
  }
}
