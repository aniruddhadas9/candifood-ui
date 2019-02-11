import {Inject, Injectable, InjectionToken} from '@angular/core';
import {Observer} from 'rxjs/internal/types';
import {Observable} from 'rxjs/internal/Observable';
import {GoogleApiConfigService, NgGapiClientConfig} from './google-api-config.service';

export let NG_GAPI_CONFIG: InjectionToken<NgGapiClientConfig> =
  new InjectionToken<NgGapiClientConfig>('ng-gapi.config');

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {

  private readonly gapiUrl: string = 'https://apis.google.com/js/api.js';
  private config: GoogleApiConfigService;

  constructor(@Inject(NG_GAPI_CONFIG) config: NgGapiClientConfig) {
    this.config = new GoogleApiConfigService(config);
    this.loadGapi().subscribe();
  }

  public onLoad(): Observable<void> {
    return this.loadGapi();
  }

  public getConfig(): GoogleApiConfigService {
    return this.config;
  }

  private loadGapi(): Observable<void> {
    return Observable.create((observer: Observer<boolean>) => {
      const node = document.createElement('script');
      node.src = this.gapiUrl;
      node.type = 'text/javascript';
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
      node.onload = () => {
        observer.next(true);
        observer.complete();
      };
    });
  }
}
