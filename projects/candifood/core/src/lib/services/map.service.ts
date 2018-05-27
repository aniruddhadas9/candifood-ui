import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

const GEOLOCATION_ERRORS = {
  'errors.location.unsupportedBrowser': 'Browser does not support location services',
  'errors.location.permissionDenied': 'You have rejected access to your location',
  'errors.location.positionUnavailable': 'Unable to determine your location',
  'errors.location.timeout': 'Service timeout has been reached'
};

@Injectable()
export class MapService {

  public position: Observable<Position>;
  public coordinates: Coordinates;
  public map: any;
  public geocoder;
  public latLng;
  private location: Observable<any>;
  private nearByPlaces: Observable<any>;
  private type = 'restaurant';
  private keyword = 'restaurant';

  constructor() {
  }

  public getBrowserCoordinates(opts): Observable<Position> {
    return this.position || Observable.create(observer => {
      if (window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(
          (position: Position) => {
            this.coordinates = position.coords;
            this.position = Observable.create(position);
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

  public getAddressFromCoordinates(latLngValue) {
    return this.location || Observable.create(observer => {
      this.geocoder = this.geocoder || new (<any>window).google.maps.Geocoder();
      this.latLng = this.latLng || new (<any>window).google.maps.LatLng(latLngValue.latitude, latLngValue.longitude);
      this.geocoder.geocode({'latLng': this.latLng}, (results, status) => {
        if (status === (<any>window).google.maps.GeocoderStatus.OK) {
          const newLocation: any = this.processFullLocation(results[0]);
          newLocation.latitude = latLngValue.latitude;
          newLocation.longitude = latLngValue.longitude;
          this.location = Observable.create(newLocation);
          observer.next(newLocation);
          observer.complete();
        } else {
          observer.error('LatLng: ' + JSON.stringify(latLngValue) + ', status : ' + status);
        }
      });
    });
  }


  public getUserRestaurants(userLocation) {
    return Observable.create(observer => {
      const keyword = 'restaurant';
      const rankBy = 'distance';
      const search = {
        keyword: '',
        radius: '',
        location: {},
        types: [],
      };
      const restaurants = [];

      const mapOptions: any = {
        zoom: 8,
        center: new (<any>window).google.maps.LatLng(userLocation.latitude, userLocation.longitude),
        mapTypeId: (<any>window).google.maps.MapTypeId.ROADMAP
      };

      const places = new (<any>window).google.maps.places.PlacesService(this.map);
      if (keyword) {
        search.keyword = keyword;
        console.log('keyword found and setting it to filter that particular types of restaurant!');
      }

      search.types = ['restaurant'];

      if (rankBy === 'distance' && (search.types || search.keyword)) {
        // search.rankBy = (<any>window).google.maps.places.RankBy.DISTANCE;
        search.location = new (<any>window).google.maps.LatLng(userLocation.latitude, userLocation.longitude);
        const centerMarker = new (<any>window).google.maps.Marker({
          position: search.location,
          animation: (<any>window).google.maps.Animation.DROP,
          map: (<any>window).google.maps.map
        });
      } else {
        console.log('nearbyrestaurant: setting the laglng:%o', userLocation);
        // search.bounds = (<any>window).google.map.getBounds();
      }
      search.location = {lat: userLocation.latitude, lng: userLocation.longitude};
      search.radius = '10000';

      places.nearbySearch(search, (results, status) => {
        if (status === (<any>window).google.maps.places.PlacesServiceStatus.OK) {
          for (let i = 0; i < results.length; i++) {
            console.log(typeof results[i].types);
            const location = results[i].vicinity.split(',');
            /*for (let i = 0; i < location.length; i++) {
             location[i] = location[i].trim();
             }*/
            // console.log('restaurant::::%o and address: %o', results[i], location);
            const restaurant = {
              name: results[i].name,
              types: results[i].types,
              rating: results[i].rating,
              googlePlaceId: results[i].place_id,
              latitude: results[i].geometry.location.lat(),
              longitude: results[i].geometry.location.lng(),
              owner: 'google',
              openTime: '11:00 AM',
              closeTime: '11:00 PM',
              address: location[0] + ', ' + location[1],
              locality1: location[location.length - 3],
              locality2: location[location.length - 2],
              city: location[location.length - 1]
            };
            restaurants.push(restaurant);
          }
          observer.next(restaurants);
          observer.complete();
        } else {
          const restaurant = {'name': null};
          restaurants.push(restaurant);
          observer.next(restaurants);
          observer.complete();
        }
      });

    });
  }

  public getGoogleMapPlaceDetail(googlePlaceId) {
    return Observable.create(observer => {
      // console.log('getGoogleMapPlaceDetail|parameter:%o', googlePlaceId);
      const places = new (<any>window).google.maps.places.PlacesService(this.map);
      places.getDetails({placeId: googlePlaceId}, function (place, status) {
        console.log('_mapService|fetched from map|place::::%o and status: %o', place, status);
        if (status === (<any>window).google.maps.places.PlacesServiceStatus.OK) {
          let phone;

          if (typeof place.international_phone_number !== 'undefined') {
            phone = place.international_phone_number;
          } else if (typeof place.formatted_phone_number !== 'undefined') {
            phone = place.formatted_phone_number;
          } else {
            phone = '+14156509102';
          }

          const restro = {
            place_id: place.place_id,
            phone: phone,
            website: place.website,
            url: place.url
          };
          observer.resolve(restro);
        } else {
          console.log('Unable to get phone number, email, url, website from google. error: %o', status);
          observer.reject('Unable to get phone number, email, url, website from google. error:' + status);
        }
      });
    });
  }


  public getGoogleMapPhotos(googlePlaceId) {
    return Observable.create(observer => {
      // console.log('getGoogleMapPlaceDetail|parameter:%o', googlePlaceId);
      const map = new (<any>window).google.maps.Map(document.getElementById('map-canvas'));
      const places = new (<any>window).google.maps.places.PlacesService(map);
      places.getDetails({placeId: googlePlaceId}, function (place, status) {
        console.log('mapService|fetched from map|place::::%o and status: %o', place, status);
        if (status === (<any>window).google.maps.places.PlacesServiceStatus.OK) {
          let phone;

          if (typeof place.international_phone_number !== 'undefined') {
            phone = place.international_phone_number;
          } else if (typeof place.formatted_phone_number !== 'undefined') {
            phone = place.formatted_phone_number;
          } else {
            phone = '+1 415 650 9102';
          }

          const restro = {
            place_id: place.place_id,
            phone: phone,
            website: place.website,
            url: place.url
          };
          observer.resolve(restro);
        } else {
          console.log('Unable to get phone number, email, url, website from google. error: %o', status);
          observer.reject('Unable to get phone number, email, url, website from google. error:' + status);
        }
      });
    });
  }

  /*public storeAndUpdateRestaurantsByMap() {
    this.getLatLng().mergeMap(  (latLng) => {
      const deferred = promise.defer();
      $q.when(this.getLatLng())
        .then(function (latLng) {
          // latLng = {latitude: 28.6289332, longitude: 77.2065322}; //28.6289332,77.2065322
          return this.getUserLocation(latLng);
        }).then(function (userLocation) {
        this.appService.userLocation = userLocation;
        // localStorageService.set('userLocation', userLocation);
        return this.userRestaurants(userLocation);
      }).then(function (userNearbyRestaurants) {
        console.log('storeAndUpdateRestaurantsByMap|userNearbyRestaurants:%o', userNearbyRestaurants);
        for (let i = 0; i < userNearbyRestaurants.restaurant.length; i++) {
          this.appService.userNearbyRestaurants.restaurant.items.splice(0, 0, userNearbyRestaurants.restaurant[i]);
          // console.log("map restaurant added:%0", userNearbyRestaurants.restaurant[i]);
        }
        // console.log("picked up restaurants and locationfrom map: %o", userNearbyRestaurants);
        this.httpClient.post('restaurant/addList', userNearbyRestaurants).subscribe(function (results) {
          deferred.resolve(results.data);
        }, function (error) {
          console.log('Error while storing fetched restaurants from google map! :: ' + error);
          deferred.reject(error);
        });

      }); // .then(function(){return this.userRestaurantDetail()});
      // return deferred.promise;
    });
  }*/

  public storeAndUpdateRestaurantsManual(userLocation) {
    return Observable.create(observer => {
      this.getUserRestaurants(userLocation).then(function (userNearbyRestaurants) {
        console.log('storeAndUpdateRestaurantsManual|userNearbyRestaurants:%o', userNearbyRestaurants);
        for (let i = 0; i < userNearbyRestaurants.restaurant.length; i++) {
          // $rootScope.restaurant.items.splice(0, 0, userNearbyRestaurants.restaurant[i]);
          // console.log("map restaurant added:%0", userNearbyRestaurants.restaurant[i]);
        }
        this.httpClient.post('restaurant/addList', userNearbyRestaurants).then(function (results) {
          observer.resolve(results.data);
        }, function (error) {
          console.log('Error while storing fetched restaurants from google map! :: ' + error);
          observer.reject(error);
        });
      });
    });
  }

  public processFullLocation(googleLocation) {
    const candifoodLocation = {};
    const gAddress = googleLocation.address_components;
    for (const prop in googleLocation) {
      if (typeof googleLocation[prop] === 'string') {
        candifoodLocation[prop] = googleLocation[prop];
      }
    }

    candifoodLocation['latitude'] = googleLocation.geometry.location.lat();
    candifoodLocation['longitude'] = googleLocation.geometry.location.lng();

    for (let i = 0; i < gAddress.length; i++) {
      candifoodLocation[gAddress[i].types[0]] = String(gAddress[i].long_name).trim();
    }
    if (typeof googleLocation.photos === 'object') {
      for (const photo in googleLocation.photos) {

      }
    }
    return candifoodLocation;
  }

}
