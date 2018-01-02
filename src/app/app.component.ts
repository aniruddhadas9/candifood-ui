import {Component, OnInit} from '@angular/core';
import {MapService} from './core/services/map.service';
import {RestaurantService} from './restaurant/service/restaurant.service';
import {GoogleMap} from '@agm/core/services/google-maps-types';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'cfs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  coordinates: Coordinates;
  title = 'cfs';

  constructor(private restaurantService: RestaurantService,
              private httpClient: HttpClient,
              private mapService: MapService) {
  }

  ngOnInit() {
  }

  mapReady(map: GoogleMap) {
    this.mapService.map = map;
    this.mapService.getLocation({}).subscribe((position: Position) => {
      this.coordinates = position && position.coords;
      this.mapService.getUserLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }).subscribe((location) => {
        this.mapService.getUserRestaurants(location).subscribe((restaurants) => {
          this.restaurantService.restaurants = [ ...restaurants];
          const request = {
            location: [location],
            restaurant: restaurants
          };
          this.restaurantService.addRestaurants(request).subscribe(function (results) {
            console.log('stored restaurants into datastore:%o', results);
          }, function (error) {
            console.log('Error while storing fetched restaurants from google map! error: %o ', error);
          });
          console.log('getUserFromMap|restaurants:%o', restaurants);
        });
      });
    });
  }
}
