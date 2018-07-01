import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../service/restaurant.service';
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
import { library } from '@fortawesome/fontawesome-svg-core';
import { MapService } from '@candifood/core';
import {CfsInfiniteScrollService} from '../../../../../projects/candifood/core/src/lib/services/cfs-infinite-scroll.service';

@Component({
  selector: 'cfs-display-restaurant',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  constructor(
    public restaurantService: RestaurantService,
    private cfsInfiniteScrollService: CfsInfiniteScrollService
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
    this.cfsInfiniteScrollService.scrolledBehaviorSubject.next(event);
  }

}
