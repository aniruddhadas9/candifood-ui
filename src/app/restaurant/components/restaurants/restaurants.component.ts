import {ChangeDetectorRef, Component, OnInit, ViewEncapsulation} from '@angular/core';
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
import {CfsInfiniteScrollService} from '../../../../../projects/candifood/core/src/lib/services/cfs-infinite-scroll.service';
import {MapService} from '../../../../../projects/candifood/core/src/lib/services/map.service';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'cfs-display-restaurant',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RestaurantsComponent implements OnInit {

  constructor(
    public restaurantService: RestaurantService,
    private mapService: MapService,
    private changeDetectorRef: ChangeDetectorRef,
    public ngbCarouselConfig: NgbCarouselConfig,
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

    // ngbCarouselConfig.interval = 3000;
    // ngbCarouselConfig.wrap = true;
  }

  ngOnInit() {

  }

  onScroll(event) {
    console.log(event);
    this.cfsInfiniteScrollService.scrolledBehaviorSubject.next(event);
  }

  getGoogleMapPhotos(googlePlaceId, index: number) {
    this.mapService.getGoogleMapPlaceDetail(googlePlaceId).subscribe((place: any) => {
      place.photos = place.photos.map((photo) => {
        photo.url = photo.getUrl({'maxWidth': 250, 'maxHeight': 200});
        return photo;
      });
      this.restaurantService.restaurants[index].place = place;
      this.changeDetectorRef.detectChanges();
      console.log(this.restaurantService.restaurants[index]);
    });
  }
}
