import {Component, OnInit} from '@angular/core';
import {RestaurantService} from '../../service/restaurant.service';
import {MapService} from '../../../core/services/map.service';
import {ConfigService} from '../../../core/services/config.service';
import {AppService} from '../../../services/app.service';
import {WarningAlert} from '../../../core/services/alert.service';

@Component({
  selector: 'cfs-display-restaurant',
  templateUrl: './display-restaurant.component.html',
  styleUrls: ['./display-restaurant.component.scss']
})
export class DisplayRestaurantComponent implements OnInit {

  public location: any = null;

  constructor(public restaurantService: RestaurantService, private mapService: MapService) {
  }

  ngOnInit() {
    this.mapService.getLocation({}).subscribe((position: Position) => {
      this.mapService.getUserLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }).subscribe((location) => {
        console.log('displayrestaurant|ngInit|location:%o', location);
        this.restaurantService.getRestaurantsBySubLocality(location.locality).subscribe((restaurants) => {
          this.restaurantService.restaurants = [...this.restaurantService.restaurants, ...restaurants];
        });
        this.location = location;
      });
    });
  }

  getUserFromMap() {
    this.mapService.getLocation({}).subscribe((position: Position) => {
      this.mapService.getUserLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }).subscribe((location) => {
        console.log('getUserFromMap|location:%o', location);
        this.location = location;
      });
    });
  }


}
