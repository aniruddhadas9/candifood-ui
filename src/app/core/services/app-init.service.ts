import {Injectable} from '@angular/core';
import {ConfigService} from './config.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export function appInitFactory(init: AppInitService): () => Promise<any> {
  return () => init.load().toPromise();
}

@Injectable()
export class AppInitService {

  constructor(private config: ConfigService) { }

  public load(): Observable<any> {
    return this.config.load().map((res) => {
      // can run other app initializations here that must be run after the config has been loaded
      // can also run then in other APP_INITIALIZERS

      return res;
    });
  }
}
