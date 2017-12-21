import {Injectable} from '@angular/core';
import {ConfigService} from './config.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {GeoLocationService} from '../../location/service/geo-location.service';

export function appInitFactory(init: AppInitService): () => Promise<any> {
  return () => init.load().toPromise();
}


@Injectable()
export class AppInitService {

  constructor(private config: ConfigService, private geoLocation: GeoLocationService) { }

  public load(): Observable<any> {
    return this.config.load().map((res) => {
      // can run other app initializations here that must be run after the config has been loaded
      // can also run then in other APP_INITIALIZERS

      // Get the current location of the user
      this.geoLocation.getLocation({}).subscribe((position: Position) => {
        res.latitude = position.coords.latitude;
        res.longitude = position.coords.longitude;
      });


      return res;
    });
  }
}
