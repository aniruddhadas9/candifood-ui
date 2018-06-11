import {Component, OnInit} from '@angular/core';
import {RestaurantService} from '../../service/restaurant.service';
import {
  faUtensils,
  faGlassMartini,
  faTruckMoving,
  faWineGlass,
  faCoffee,
  faShoppingCart,
  faGamepad,
  faBirthdayCake,
  faBeer,
  faStar,
  faStarHalf, faMagic, faSquare
} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';
import {MapService} from '../../../../../projects/candifood/core/src/lib/services/map.service';

@Component({
  selector: 'cfs-display-restaurant',
  templateUrl: './display-restaurant.component.html',
  styleUrls: ['./display-restaurant.component.scss']
})
export class DisplayRestaurantComponent implements OnInit {

  constructor(
    public restaurantService: RestaurantService,
    private mapService: MapService
  ) {
    library.add(
      faUtensils,
      faGlassMartini,
      faTruckMoving,
      faCoffee,
      faWineGlass,
      faShoppingCart,
      faGamepad,
      faBirthdayCake,
      faBeer,
      faStar,
      faStarHalf,
      faMagic,
      faSquare
    );
  }

  ngOnInit() {

  }

  onScroll(event) {
    console.log(event);
    return this.mapService.getBrowserCoordinates({}).subscribe((position: Position) => {
      this.mapService.getAddressFromCoordinates({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }).subscribe((location) => {
        this.restaurantService.getRestaurants(location)/*.subscribe((restaurants) => {
          this.restaurantService.restaurants = [...this.restaurantService.restaurants, ...restaurants];
        }, (error)=>{

        })*/;
      });
    });
  }

}
