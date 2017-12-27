import {Injectable} from '@angular/core';
import {ConfigService} from './config.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {GoogleMapsAPIWrapper} from '@agm/core';

export function appInitFactory(init: AppInitService): () => Promise<any> {
  return () => init.load().toPromise();
}

@Injectable()
export class AppInitService {

  constructor(private config: ConfigService, private googleMapsAPIWrapper: GoogleMapsAPIWrapper) {
    this.googleMapsAPIWrapper.subscribeToMapEvent('init').subscribe((mapObj) => {
      console.log('listening to init of google map mapObjConstructor:%o', mapObj);
    });
  }

  public load(): Observable<any> {
    return this.config.load().map((res) => {
      // can run other app initializations here that must be run after the config has been loaded
      // can also run then in other APP_INITIALIZERS

      return res;
    });
  }
}
