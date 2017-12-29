import {Component, OnInit} from '@angular/core';
import {MapService} from './location/service/map.service';
import {RestaurantService} from './restaurant/service/restaurant.service';
import {GoogleMap} from '@agm/core/services/google-maps-types';

@Component({
  selector: 'cfs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  coordinates: Coordinates;
  title = 'cfs';

  constructor(private restaurantService: RestaurantService,
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
          console.log('getUserFromMap|restaurants:%o', restaurants);
        });
      });
    });
  }
}
