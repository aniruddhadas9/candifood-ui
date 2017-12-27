import {Component, OnInit} from '@angular/core';
import {UserService} from './core/services/user.service';
import {ConfigService} from './core/services/config.service';
import {MapService} from './location/service/map.service';
import {RestaurantService} from './restaurant/service/restaurant.service';
import {AppService} from './services/app.service';
import {google} from '@agm/core/services/google-maps-types';

@Component({
  selector: 'cfs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  position: Position;
  title = 'cfs';

  constructor(public userService: UserService,
              private restaurantService: RestaurantService,
              private mapService: MapService,
              private configService: ConfigService,
              appService: AppService) {
  }

  ngOnInit() {
    this.mapService.getLocation({}).subscribe((position: Position) => {
      this.position = position;
    });
  }

  mapReady(event: EventListener) {
    const keyword = 'restaurant';
    const rankBy = 'distance';
    const search = {
      keyword: '',
      radius: '',
      location: {},
      types: [],
      rankBy: '',
      bounds: ''
    };
    const restaurants = [];

    const map11 = new (<any>window).google.maps.Map(document.getElementsByClassName('agm-map-container-inner'), {
      center: {lat: -33.8666, lng: 151.1958},
      zoom: 15
    });


    console.log('map11= %o', map11);
    console.log('map is ready now and event is %o', event);
    console.log('(<any>window).google.maps %o', (<any>window).google.maps);
    const service = new (<any>window).google.maps.places.PlacesService(event);
    service.nearbySearch({
      location: new (<any>window).google.maps.LatLng(-33.8665433, 151.1956316),
      radius: '500',
      type: ['restaurant']
    }, (results, status) => {
      console.log('mapService|fetched from map|restaurant::::%o and status: %o', results, status);
    });
    const places = (<any>window).google.maps.places.PlacesService(event);
    if (keyword) {
      search.keyword = keyword;
      console.log('keyword found and setting it to filter that particular types of restaurant!');
    }

    search.types = ['restaurant'];

    if (rankBy === 'distance' && (search.types || search.keyword)) {
      search.rankBy = (<any>window).google.maps.places.RankBy.DISTANCE;
      search.location = new (<any>window).google.maps.LatLng(this.position.coords.latitude, this.position.coords.longitude);
      const centerMarker = new (<any>window).google.maps.Marker({
        position: search.location,
        animation: google.maps.Animation.DROP,
        map: google.maps.map
      });
    } else {
      search.bounds = google.map.getBounds();
    }
    search.location = {lat: this.position.coords.latitude, lng: this.position.coords.longitude};
    search.radius = '500';

    // console.log("nearbyrestaurant: search:%o", search);

    // this.appService.restaurants.location = [userLocation];

    places.nearbySearch(search, (results, status) => {
      console.log('mapService|fetched from map|restaurant::::%o and status: %o', results, status);
    });
  }

}
