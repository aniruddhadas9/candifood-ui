import {Component, OnInit} from '@angular/core';
import {UserService} from './core/services/user.service';
import {ConfigService} from './core/services/config.service';
import {MapService} from './location/service/map.service';
import {RestaurantService} from './restaurant/service/restaurant.service';
import {AppService} from './services/app.service';

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

}
