import {Component, OnInit} from '@angular/core';
import {RestaurantService} from '../../service/restaurant.service';
import {MapService} from '../../../location/service/map.service';
import {ConfigService} from '../../../core/services/config.service';
import {AppService} from '../../../services/app.service';

@Component({
  selector: 'cfs-display-restaurant',
  templateUrl: './display-restaurant.component.html',
  styleUrls: ['./display-restaurant.component.scss']
})
export class DisplayRestaurantComponent implements OnInit {

  public restaurants = [];
  public location: any = null;

  constructor(private restaurantService: RestaurantService,
              private mapService: MapService,
              private configService: ConfigService, appService: AppService) {
  }

  ngOnInit() {
    this.restaurantService.getRestaurants().subscribe((restaurants) => {
      this.restaurants = restaurants;
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
