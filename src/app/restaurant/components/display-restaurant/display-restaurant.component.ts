import {Component, OnInit} from '@angular/core';
import {RestaurantService} from '../../service/restaurant.service';
import {MapService} from '../../../location/service/map.service';
import {ConfigService} from '../../../core/services/config.service';
import {AppService} from '../../../services/app.service';
import {GeoLocationService} from '../../../location/service/geo-location.service';

@Component({
  selector: 'cfs-display-restaurant',
  templateUrl: './display-restaurant.component.html',
  styleUrls: ['./display-restaurant.component.scss']
})
export class DisplayRestaurantComponent implements OnInit {

  public restaurants = [];
  public location = [];

  constructor(private restaurantService: RestaurantService,
              private geoLocation: GeoLocationService,
              private mapService: MapService,
              private configService: ConfigService, appService: AppService) {
  }

  ngOnInit() {
    this.geoLocation.getLocation({}).subscribe((position: Position) => {
      this.mapService.getUserLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }).subscribe((userData) => {
        this.location = userData;
      });
    });

    this.restaurantService.getRestaurants().subscribe((restaurants) => {
      this.restaurants = restaurants;
    });
  }


}
