import {Injectable} from '@angular/core';
import {ConfigService} from '../../core/services/config.service';
import {google} from '@agm/core/services/google-maps-types';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MapService {

  constructor(private configService: ConfigService) {
  }


  public getLatLng(): Observable<any> {
    return Observable.create(observer => {
      if (window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(function (position) {
          this.configService.latitude = position.coords.latitude;
          this.configService.longitude = position.coords.longitude;
          // console.log("_mapService|getLatLng|cnadiMap:%o", position);
          observer.next({latitude: position.coords.latitude, longitude: position.coords.longitude});
          observer.complete();
        }, function (error) {
          if (error.PERMISSION_DENIED) {
            console.log('Geolocation: Please select your location from dropdown to serve you.');
            observer.error(('Geolocation: Please select your location from dropdown to serve you.'));
          }
          if (error.POSITION_UNAVAILABLE) {
            console.log('Geolocation: Your position is unavailable! Please select your location from dropdown to serve you.');
            observer.error(('Geolocation: Your position is unavailable! Please select your location from dropdown to serve you.'));
          }
          if (error.TIMEOUT) {
            console.log('Geolocation: Timeout to get your position! Please select your location from dropdown to serve you.');
            observer.error(('Geolocation: Timeout to get your position! Please select your location from dropdown to serve you.'));
          }
        });

      } else {
        console.log('Geolocation is not supported by this browser.');
        observer.error(('Geolocation is not supported by this browser.');
      }
    });
  }

  public getUserLocation(latLngValue) {
    // console.log("_mapService|getUserLocation|latLngValue:%o", latLngValue);
    let deferred = $q.defer();
    this.configService.geocoder = new google.maps.Geocoder();
    let latlng = new google.maps.LatLng(latLngValue.latitude, latLngValue.longitude);
    this.configService.geocoder.geocode({'latLng': latlng}, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        let newLocation = mapService.processUserLocation(results[0]);
        newLocation.latitude = latLngValue.latitude;
        newLocation.longitude = latLngValue.longitude;
        console.log('_mapService|getUserLocation|from map:%o|processed object:%o', results, newLocation);

        deferred.resolve(newLocation);
      } else {
        deferred.reject('LatLng: ' + JSON.stringify(latLngValue) + ', status : ' + status);
      }
    });
    return deferred.promise;
  }


  public userRestaurants(userLocation) {
    // console.log("_mapService|userRestaurants|reached:%o", userLocation);
    let deferred = $q.defer();
    let deferredLocal = $q.when(function () {
      return $q.defer().promise;
    });
    let type = 'restaurant';
    let keyword = 'restaurant';
    let rankBy = 'distance';
    let search = {};
    let restaurants = [];

    let latlng = new google.maps.LatLng(userLocation.latitude, userLocation.longitude);
    let mapOptions = {zoom: 8, center: latlng, mapTypeId: 'roadmap'};
    this.configService.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    this.configService.places = new google.maps.places.PlacesService(this.configService.map);
    if (keyword) {
      search.keyword = keyword;
      console.log('keyword found and setting it to filter that particular types of restaurant!');
    }

    search.types = ['restaurant'];

    /*if (rankBy == 'distance' && (search.types || search.keyword)) {
      search.rankBy = google.maps.places.RankBy.DISTANCE;
      search.location = latlng;//this.configService.map.getCenter();
      this.configService.centerMarker = new google.maps.Marker({
        position: search.location,
        animation: google.maps.Animation.DROP,
        map: this.configService.map
      });
    } else {
      console.log("nearbyrestaurant: setting the laglng:%o", userLocation);
      search.bounds = this.configService.map.getBounds();
    }*/
    search.location = {lat: userLocation.latitude, lng: userLocation.longitude};
    search.radius = '500';

    // console.log("nearbyrestaurant: search:%o", search);

    this.configService.userNearbyRestaurants.location = [userLocation];

    this.configService.places.nearbySearch(search, function (results, status) {
      console.log('mapService|fetched from map|restaurant::::%o and status: %o', results, status);
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {

          let location = results[i].vicinity.split(',');
          /*for (let i = 0; i < location.length; i++) {
           location[i] = location[i].trim();
           }*/
          // console.log('restaurant::::%o and address: %o', results[i], location);
          let restaurant = {
            name: results[i].name,
            type: JSON.stringify(results[i].types),
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
        this.configService.userNearbyRestaurants.restaurant = restaurants;
        deferred.resolve(this.configService.userNearbyRestaurants);
      } else {
        let restaurant = {'name': null};
        restaurants.push(restaurant);
        this.configService.userNearbyRestaurants.restaurant = restaurants;
        deferred.resolve(this.configService.userNearbyRestaurants);
      }
    });

    // console.log("restaurant data fefore sending promise to the main controller:%o", this.configService.userNearbyRestaurants)
    return deferred.promise;
  }

  public getGoogleMapPlaceDetail(googlePlaceId) {
    let deferred = $q.defer();
    // console.log('getGoogleMapPlaceDetail|parameter:%o', googlePlaceId);
    this.configService.map = new google.maps.Map(document.getElementById('map-canvas'));
    this.configService.places = new google.maps.places.PlacesService(this.configService.map);
    this.configService.places.getDetails({placeId: googlePlaceId}, function (place, status) {
      console.log('_mapService|fetched from map|place::::%o and status: %o', place, status);
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        let phone;

        if (typeof place.international_phone_number != 'undefined') {
          phone = place.international_phone_number;
        } else if (typeof place.formatted_phone_number != 'undefined') {
          phone = place.formatted_phone_number;
        } else {
          phone = '+14156509102';
        }

        let restro = {
          place_id: place.place_id,
          phone: phone,
          website: place.website,
          url: place.url
        };
        deferred.resolve(restro);
      } else {
        console.log('Unable to get phone number, email, url, website from google. error: %o', status);
        deferred.reject('Unable to get phone number, email, url, website from google. error:' + status);
      }
    });
    return deferred.promise;
  }


  public getGoogleMapPhotos(googlePlaceId) {
    let deferred = $q.defer();
    // console.log('getGoogleMapPlaceDetail|parameter:%o', googlePlaceId);
    this.configService.map = new google.maps.Map(document.getElementById('map-canvas'));
    this.configService.places = new google.maps.places.PlacesService(this.configService.map);
    this.configService.places.getDetails({placeId: googlePlaceId}, function (place, status) {
      console.log('mapService|fetched from map|place::::%o and status: %o', place, status);
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        let phone;

        if (typeof place.international_phone_number != 'undefined') {
          phone = place.international_phone_number;
        } else if (typeof place.formatted_phone_number != 'undefined') {
          phone = place.formatted_phone_number;
        } else {
          phone = '+1 415 650 9102';
        }

        let restro = {
          place_id: place.place_id,
          phone: phone,
          website: place.website,
          url: place.url
        };
        deferred.resolve(restro);
      } else {
        console.log('Unable to get phone number, email, url, website from google. error: %o', status);
        deferred.reject('Unable to get phone number, email, url, website from google. error:' + status);
      }
    });
    return deferred.promise;
  }

  public storeAndUpdateRestaurantsByMap() {
    this.getLatLng().subscribe(function () {
      let deferred = $q.defer();
      $q.when(mapService.getLatLng())
        .then(function (latLng) {
          // latLng = {latitude: 28.6289332, longitude: 77.2065322}; //28.6289332,77.2065322
          return mapService.getUserLocation(latLng);
        }).then(function (userLocation) {
        $rootScope.location = userLocation;
        localStorageService.set('userLocation', userLocation);
        return mapService.userRestaurants(userLocation);
      }).then(function (userNearbyRestaurants) {
        console.log('storeAndUpdateRestaurantsByMap|userNearbyRestaurants:%o', userNearbyRestaurants);
        for (let i = 0; i < userNearbyRestaurants.restaurant.length; i++) {
          $rootScope.restaurant.items.splice(0, 0, userNearbyRestaurants.restaurant[i]);
          // console.log("map restaurant added:%0", userNearbyRestaurants.restaurant[i]);
        }
        // console.log("picked up restaurants and locationfrom map: %o", userNearbyRestaurants);
        baseService._post('restaurant/addList', userNearbyRestaurants).then(function (results) {
          deferred.resolve(results.data);
        }, function (error) {
          console.log('Error while storing fetched restaurants from google map! :: ' + error);
          deferred.reject(error);
        });

      });//.then(function(){return this.userRestaurantDetail()});
      //return deferred.promise;
    });
  };

  public storeAndUpdateRestaurantsManual(userLocation) {
    let deferred = $q.defer();
    mapService.userRestaurants(userLocation).then(function (userNearbyRestaurants) {
      console.log('storeAndUpdateRestaurantsManual|userNearbyRestaurants:%o', userNearbyRestaurants);
      for (let i = 0; i < userNearbyRestaurants.restaurant.length; i++) {
        $rootScope.restaurant.items.splice(0, 0, userNearbyRestaurants.restaurant[i]);
        // console.log("map restaurant added:%0", userNearbyRestaurants.restaurant[i]);
      }
      baseService._post('restaurant/addList', userNearbyRestaurants).then(function (results) {
        deferred.resolve(results.data);
      }, function (error) {
        console.log('Error while storing fetched restaurants from google map! :: ' + error);
        deferred.reject(error);
      });
    });
    return deferred.promise;
  }


  public processUserLocation(googleLocation) {
    let candifoodLocation = {};
    let gAddress = googleLocation.address_components;
    for (let prop in googleLocation) {
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
      for (let photo in googleLocation.photos) {

      }
    }
    console.log('_mapService|processUserLocation|processing:%o and locationprocessed:%o', googleLocation, candifoodLocation);
    return candifoodLocation;
  }

  private _processRestaurantObject(googleLocation) {
    let gAddress = googleLocation.address_components;
    let candifoodLocation = {};
    candifoodLocation['formatted_address'] = googleLocation.formatted_address;
    candifoodLocation['place_id'] = googleLocation.place_id;
    for (let i = 0; i < gAddress.length; i++) {
      candifoodLocation[gAddress[i].types[0]] = String(gAddress[i].long_name).trim();
    }

    /*for (let key in candifoodLocation) {
      console.log("private String "+key+";")
    }*/

    return candifoodLocation;
  }


}
