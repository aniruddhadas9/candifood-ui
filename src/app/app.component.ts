import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestaurantService } from './restaurant/service/restaurant.service';
import { GoogleMap } from '@agm/core/services/google-maps-types';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  ChangeLocationModelComponent
} from '../../projects/candifood/core/src/lib/components/change-location-model/change-location-model.component';
import {MapService} from '../../projects/candifood/core/src/lib/services/map.service';
import {CfsInfiniteScrollService} from '../../projects/candifood/core/src/lib/services/cfs-infinite-scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'candifood';
  public modalRef;
  public coordinates;
  public location;

  // header links
  public middleButton;
  public headerBrand;
  public headerLeftLinks;

  // footer links
  public year: string;
  public social;
  public brand;
  public contact;
  public message;
  public columnOneLinks;
  public columnTwoLinks;

  constructor(
    private restaurantService: RestaurantService,
    private httpClient: HttpClient,
    private mapService: MapService,
    private modalService: NgbModal,
    private changeDetectorRef: ChangeDetectorRef,
    private cfsInfiniteScrollService: CfsInfiniteScrollService
  ) {

    this.middleButton = {
      display: true,
      label: 'Trying to get location from device...',
      loading: true
    };

    this.headerLeftLinks = [
      {label: 'Privacy', url: '/privacy', display: false},
      {label: 'Profile', url: '/profile', display: true},
      {label: 'login', url: '/login', display: true},
    ];
    this.headerBrand = {
      label: 'candifood',
      url: '/'
    };

    this.year = '2018';
    this.social = {
      facebook: 'http://www.facebook.com',
      googlePlus: 'http://www.plus.google.com',
      twitter: 'http://www.twitter.com',
      linkedin: 'http://www.linkedin.com',
    };

    this.brand = {
      label: 'candifood team',
      url: 'https://www.candifood.com'
    };

    this.contact = {
      name: 'Aniruddha Das',
      email: 'aniruddhadas9@gmail.com',
      phone: '+1 415 650 9102',
      fax: '+x xxx xxx xxxx'
    };
    this.message = {
      heading: 'All your eating solution',
      desc: 'What we eat, it makes a difference in our life. Healthy food does not always comes with good test.' +
      'We are here to help you to be health as well as take care of your test. Just let us know you.'
    };
    this.columnOneLinks = [
      {label: 'login', url: '/login'}
    ];
    this.columnTwoLinks = [
      {label: 'profile', url: '/profile'}
    ];

  }


  ngOnInit() {

    // gets the coordinates from the browser and address from google map. this happens first time
    this.mapService.getBrowserCoordinates({}).subscribe((position: Position) => {
      this.coordinates = position && position.coords;
      this.mapService.getAddressFromCoordinates({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }).subscribe((location: any) => {
        this.middleButton.label = location.formatted_address;
        this.middleButton.loading = false;
        this.changeDetectorRef.detectChanges();
        this._getRestaurantsFromMap(location);
      }, (error) => {
        this.middleButton.label = 'select location here.';
        this.middleButton.loading = false;
      });
    }, (error) => {
      this.middleButton.label = 'select location here.';
      this.middleButton.loading = false;
    });


    // loading restaurant on change of address
    this.mapService.locationBehaviorSubject.subscribe((location) => {
      this.location = location;
      this.restaurantService.restaurants = [];
      this._getRestaurantsFromMap(location);
    });

    // loading restaurants on autoscroll
    this.cfsInfiniteScrollService.scrolledBehaviorSubject.subscribe((position) => {
      this.restaurantService.getRestaurants(this.location);
    });
  }


  openLocationChangeModel(event) {
    this.modalRef = this.modalService.open(ChangeLocationModelComponent, {windowClass: 'location-change-modal'});
    this.modalRef.componentInstance.input = this.location;
    this.modalRef.componentInstance.output.subscribe((location) => {
      this.location = location;
      this.middleButton.label = location.formatted_address;
      this.modalRef.componentInstance.input = this.location;
      this.mapService.locationBehaviorSubject.next(location);
    });
  }

  mapReady(map: GoogleMap) {
    this.mapService.map = map;
  }

  _getRestaurantsFromMap(location) {
    this.mapService.getRestaurantsFromGoogleMap(location).subscribe((restaurants: any) => {
      this.restaurantService.restaurants = [...restaurants];
      this.changeDetectorRef.detectChanges();
      const request = {
        location: [location],
        restaurant: restaurants
      };
      this.restaurantService.addRestaurants(request).subscribe(function (results) {
      }, function (error) {
        console.log('Error while storing fetched restaurants from google map! error: %o ', error);
      });
    });
  }
}
