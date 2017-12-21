import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ConfigService {
  public config: any;
  private configObs: Observable<any>;

  constructor(private httpClient: HttpClient) {
   }

  public load(): Observable<any> {
    if ( this.config ) {
      return Observable.of(this.config);
    } else if (!this.configObs) {
      this.configObs = this.httpClient.get('/configuration.json', { withCredentials: true }).map((res) => {

        this.config = this.config || res || {};
        return this.config;
      });
    }

    return this.configObs;
  }
}
