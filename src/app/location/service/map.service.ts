import { Injectable } from '@angular/core';
import {ConfigService} from '../../core/services/config.service';
import {google} from '@agm/core/services/google-maps-types';

@Injectable()
export class MapService {

  constructor(private configService: ConfigService) { }


  public getLatLng() {
    var deferred = $q.defer();
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(function (position) {
        candiMap.latitude = position.coords.latitude;
        candiMap.longitude = position.coords.longitude;
        //console.log("_mapService|getLatLng|cnadiMap:%o", position);
        deferred.resolve({latitude: position.coords.latitude, longitude: position.coords.longitude});
      }, function (error) {
        if (error.PERMISSION_DENIED) {
          console.log("Geolocation: Please select your location from dropdown to serve you.");
          deferred.reject("Geolocation: Please select your location from dropdown to serve you.");
        }
        if (error.POSITION_UNAVAILABLE) {
          console.log("Geolocation: Your position is unavailable! Please select your location from dropdown to serve you.");
          deferred.reject("Geolocation: Your position is unavailable! Please select your location from dropdown to serve you.");
        }
        if (error.TIMEOUT) {
          console.log("Geolocation: Timeout to get your position! Please select your location from dropdown to serve you.");
          deferred.reject("Geolocation: Timeout to get your position! Please select your location from dropdown to serve you.");
        }
      });

    } else {
      console.log("Geolocation is not supported by this browser.");
      deferred.reject("Geolocation is not supported by this browser.");
    }
    //console.log("making sure that the promise is returning!!")
    return deferred.promise;
  }

  public getUserLocation(latLngValue) {
    //console.log("_mapService|getUserLocation|latLngValue:%o", latLngValue);
    var deferred = $q.defer();
    candiMap.geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(latLngValue.latitude, latLngValue.longitude);
    candiMap.geocoder.geocode({'latLng': latlng}, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        var newLocation = mapService.processUserLocation(results[0]);
        newLocation.latitude = latLngValue.latitude;
        newLocation.longitude = latLngValue.longitude;
        console.log("_mapService|getUserLocation|from map:%o|processed object:%o", results, newLocation);

        deferred.resolve(newLocation);
      } else {
        deferred.reject('LatLng: ' + JSON.stringify(latLngValue) + ', status : ' + status);
      }
    });
    return deferred.promise;
  };


  this.userRestaurants = function (userLocation) {
    //console.log("_mapService|userRestaurants|reached:%o", userLocation);
    var deferred = $q.defer();
    var deferredLocal = $q.when(function () {
      return $q.defer().promise
    });
    var type = "restaurant";
    var keyword = "restaurant";
    var rankBy = "distance";
    var search = {};
    var restaurants = [];

    var latlng = new google.maps.LatLng(userLocation.latitude, userLocation.longitude);
    var mapOptions = {zoom: 8, center: latlng, mapTypeId: 'roadmap'};
    candiMap.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    candiMap.places = new google.maps.places.PlacesService(candiMap.map);
    if (keyword) {
      search.keyword = keyword;
      console.log("keyword found and setting it to filter that particular types of restaurant!");
    }

    search.types = ["restaurant"];

    /*if (rankBy == 'distance' && (search.types || search.keyword)) {
      search.rankBy = google.maps.places.RankBy.DISTANCE;
      search.location = latlng;//candiMap.map.getCenter();
      candiMap.centerMarker = new google.maps.Marker({
        position: search.location,
        animation: google.maps.Animation.DROP,
        map: candiMap.map
      });
    } else {
      console.log("nearbyrestaurant: setting the laglng:%o", userLocation);
      search.bounds = candiMap.map.getBounds();
    }*/
    search.location = {lat: userLocation.latitude, lng: userLocation.longitude};;
    search.radius = '500';

    //console.log("nearbyrestaurant: search:%o", search);

    candiMap.userNearbyRestaurants.location = [userLocation];

    candiMap.places.nearbySearch(search, function (results, status) {
      console.log('mapService|fetched from map|restaurant::::%o and status: %o', results, status);
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {

          var location = results[i].vicinity.split(",");
          /*for (var i = 0; i < location.length; i++) {
           location[i] = location[i].trim();
           }*/
          //console.log('restaurant::::%o and address: %o', results[i], location);
          var restaurant = {
            name: results[i].name,
            type: JSON.stringify(results[i].types),
            rating: results[i].rating,
            googlePlaceId: results[i].place_id,
            latitude: results[i].geometry.location.lat(),
            longitude: results[i].geometry.location.lng(),
            owner: 'google',
            openTime: '11:00 AM',
            closeTime: '11:00 PM',
            address: location[0] + ", " + location[1],
            locality1: location[location.length - 3],
            locality2: location[location.length - 2],
            city: location[location.length - 1]
          };
          restaurants.push(restaurant);
        }
        candiMap.userNearbyRestaurants.restaurant = restaurants;
        deferred.resolve(candiMap.userNearbyRestaurants);
      } else {
        var restaurant = {"name":null};
        restaurants.push(restaurant);
        candiMap.userNearbyRestaurants.restaurant = restaurants;
        deferred.resolve(candiMap.userNearbyRestaurants);
      }
    });

    //console.log("restaurant data fefore sending promise to the main controller:%o", candiMap.userNearbyRestaurants)
    return deferred.promise;
  };

  this.getGoogleMapPlaceDetail = function (googlePlaceId) {
    var deferred = $q.defer();
    //console.log('getGoogleMapPlaceDetail|parameter:%o', googlePlaceId);
    candiMap.map = new google.maps.Map(document.getElementById('map-canvas'));
    candiMap.places = new google.maps.places.PlacesService(candiMap.map);
    candiMap.places.getDetails({placeId: googlePlaceId}, function (place, status) {
      console.log('_mapService|fetched from map|place::::%o and status: %o', place, status);
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        var phone;

        if (typeof place.international_phone_number != 'undefined') {
          phone = place.international_phone_number;
        } else if (typeof place.formatted_phone_number != 'undefined') {
          phone = place.formatted_phone_number;
        } else {
          phone = '+14156509102';
        }

        var restro = {
          place_id: place.place_id,
          phone: phone,
          website: place.website,
          url: place.url
        };
        deferred.resolve(restro);
      } else {
        console.log("Unable to get phone number, email, url, website from google. error: %o", status);
        deferred.reject("Unable to get phone number, email, url, website from google. error:" + status);
      }
    });
    return deferred.promise;
  };


  this.getGoogleMapPhotos = function (googlePlaceId) {
    var deferred = $q.defer();
    //console.log('getGoogleMapPlaceDetail|parameter:%o', googlePlaceId);
    candiMap.map = new google.maps.Map(document.getElementById('map-canvas'));
    candiMap.places = new google.maps.places.PlacesService(candiMap.map);
    candiMap.places.getDetails({placeId: googlePlaceId}, function (place, status) {
      console.log('mapService|fetched from map|place::::%o and status: %o', place, status);
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        var phone;

        if (typeof place.international_phone_number != 'undefined') {
          phone = place.international_phone_number;
        } else if (typeof place.formatted_phone_number != 'undefined') {
          phone = place.formatted_phone_number;
        } else {
          phone = '+1 415 650 9102';
        }

        var restro = {
          place_id: place.place_id,
          phone: phone,
          website: place.website,
          url: place.url
        };
        deferred.resolve(restro);
      } else {
        console.log("Unable to get phone number, email, url, website from google. error: %o", status);
        deferred.reject("Unable to get phone number, email, url, website from google. error:" + status);
      }
    });
    return deferred.promise;
  };

  this.storeAndUpdateRestaurantsByMap = function() {
    mapService.getLatLng().then(function () {
      var deferred = $q.defer();
      $q.when(mapService.getLatLng())
        .then(function (latLng) {
          //latLng = {latitude: 28.6289332, longitude: 77.2065322}; //28.6289332,77.2065322
          return mapService.getUserLocation(latLng);
        }).then(function (userLocation) {
        $rootScope.location = userLocation;
        localStorageService.set('userLocation',userLocation);
        return mapService.userRestaurants(userLocation);
      }).then(function (userNearbyRestaurants) {
        console.log("storeAndUpdateRestaurantsByMap|userNearbyRestaurants:%o", userNearbyRestaurants);
        for(var i=0; i< userNearbyRestaurants.restaurant.length; i++){
          $rootScope.restaurant.items.splice(0, 0, userNearbyRestaurants.restaurant[i]);
          //console.log("map restaurant added:%0", userNearbyRestaurants.restaurant[i]);
        }
        //console.log("picked up restaurants and locationfrom map: %o", userNearbyRestaurants);
        baseService._post("restaurant/addList", userNearbyRestaurants).then(function (results) {
          deferred.resolve(results.data);
        }, function (error) {
          console.log("Error while storing fetched restaurants from google map! :: "+error);
          deferred.reject(error);
        });

      })//.then(function(){return this.userRestaurantDetail()});
      //return deferred.promise;
    });
  };

  this.storeAndUpdateRestaurantsManual = function(userLocation) {
    var deferred = $q.defer();
    mapService.userRestaurants(userLocation).then(function (userNearbyRestaurants) {
      console.log("storeAndUpdateRestaurantsManual|userNearbyRestaurants:%o", userNearbyRestaurants);
      for(var i=0; i< userNearbyRestaurants.restaurant.length; i++){
        $rootScope.restaurant.items.splice(0, 0, userNearbyRestaurants.restaurant[i]);
        //console.log("map restaurant added:%0", userNearbyRestaurants.restaurant[i]);
      }
      baseService._post("restaurant/addList", userNearbyRestaurants).then(function (results) {
        deferred.resolve(results.data);
      }, function (error) {
        console.log("Error while storing fetched restaurants from google map! :: "+error);
        deferred.reject(error);
      });
    });
    return deferred.promise;
  };


  this.processUserLocation = function (googleLocation) {
    var candifoodLocation = {};
    var gAddress = googleLocation.address_components;
    for (var prop in googleLocation) {
      if( typeof googleLocation[prop] === 'string' ) {
        candifoodLocation[prop] = googleLocation[prop];
      }
    }

    candifoodLocation['latitude'] = googleLocation.geometry.location.lat();
    candifoodLocation['longitude'] = googleLocation.geometry.location.lng();

    for (var i = 0; i < gAddress.length; i++) {
      candifoodLocation[gAddress[i].types[0]] = String(gAddress[i].long_name).trim();
    }
    if( typeof googleLocation.photos === 'object' ) {
      for (var photo in googleLocation.photos) {

      }
    }
    console.log("_mapService|processUserLocation|processing:%o and locationprocessed:%o", googleLocation, candifoodLocation);
    return candifoodLocation;
  }

  function _processRestaurantObject(googleLocation) {
    var gAddress = googleLocation.address_components;
    var candifoodLocation = {};
    candifoodLocation['formatted_address'] = googleLocation.formatted_address;
    candifoodLocation['place_id'] = googleLocation.place_id;
    for (var i = 0; i < gAddress.length; i++) {
      candifoodLocation[gAddress[i].types[0]] = String(gAddress[i].long_name).trim();
    }

    /*for (var key in candifoodLocation) {
      console.log("private String "+key+";")
    }*/

    return candifoodLocation;
  }


}
