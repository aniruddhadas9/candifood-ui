import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {google} from '@agm/core/services/google-maps-types';

const GEOLOCATION_ERRORS = {
  'errors.location.unsupportedBrowser': 'Browser does not support location services',
  'errors.location.permissionDenied': 'You have rejected access to your location',
  'errors.location.positionUnavailable': 'Unable to determine your location',
  'errors.location.timeout': 'Service timeout has been reached'
};

@Injectable()
export class GeoLocationService {

  private position: Observable<Position>;

  /**
   * Obtains the geographic position, in terms of latitude and longitude coordinates, of the device.
   * @param {Object} [opts] An object literal to specify one or more of the following attributes and desired values:
   *   - enableHighAccuracy: Specify true to obtain the most accurate position possible, or false to optimize in favor
   *   of performance and power consumption.
   *   - timeout: An Integer value that indicates the time, in milliseconds, allowed for obtaining the position.
   *              If timeout is Infinity, (the default value) the location request will not time out.
   *              If timeout is zero (0) or negative, the results depend on the behavior of the location provider.
   *   - maximumAge: An Integer value indicating the maximum age, in milliseconds, of cached position information.
   *                 If maximumAge is non-zero, and a cached position that is no older than maximumAge is available,
   *                 the cached position is used instead of obtaining an updated location.
   *                 If maximumAge is zero (0), watchPosition always tries to obtain an updated position,
   *                 even if a cached position is already available.
   *                 If maximumAge is Infinity, any cached position is used, regardless of its age, and watchPosition
   *                 only tries to obtain an updated position if no cached position data exists.
   * @returns {Observable} An observable sequence with the geographical location of the device running the client.
   */
  public getLocation(opts): Observable<Position> {

    return this.position || Observable.create(observer => {

      if (window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(
          (position: Position) => {
            this.position = Observable.of(position);
            observer.next(position);
            observer.complete();
          },
          (error) => {
            switch (error.code) {
              case 1:
                observer.error(GEOLOCATION_ERRORS['errors.location.permissionDenied']);
                break;
              case 2:
                observer.error(GEOLOCATION_ERRORS['errors.location.positionUnavailable']);
                break;
              case 3:
                observer.error(GEOLOCATION_ERRORS['errors.location.timeout']);
                break;
            }
          },
          opts);
      } else {
        observer.error(GEOLOCATION_ERRORS['errors.location.unsupportedBrowser']);
      }

    });
  }

  public getLocationFromGoogleMap() {
    const mapOptions = {
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    const map = new google.maps.Map(document.getElementById('google_canvas'), mapOptions);

    navigator.geolocation.getCurrentPosition((position) => {

      const geolocate = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      const infowindow = new google.maps.InfoWindow({
        map: map,
        position: geolocate,
        content:
        '<h1>Location pinned from HTML5 Geolocation!</h1>' +
        '<h2>Latitude: ' + position.coords.latitude + '</h2>' +
        '<h2>Longitude: ' + position.coords.longitude + '</h2>'
      });
      map.setCenter(geolocate);

    });
  }
}
