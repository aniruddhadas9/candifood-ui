import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RestaurantService} from './restaurant/service/restaurant.service';
import {GoogleMap} from '@agm/core/services/google-maps-types';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {
  CfsInfiniteScrollService,
  ChangeLocationModelComponent,
  Footer,
  Header,
  MapService,
  UserService,
  AlertService
} from '@candiman/website';

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
  public header: Header;

  // footer links
  public footer: Footer;


  constructor(
    private restaurantService: RestaurantService,
    private httpClient: HttpClient,
    private mapService: MapService,
    private modalService: NgbModal,
    private changeDetectorRef: ChangeDetectorRef,
    private cfsInfiniteScrollService: CfsInfiniteScrollService,
    private userService: UserService,
    private alertService: AlertService
  ) {

    // Subscribe to the login
    this.userService.user.subscribe((user: any) => {

      if (user === null) {
        // logout condition
        this.header.links.rightLinks[0].hidden = true;
        this.header.links.rightLinks[1].hidden = false;
      } else if (!user.status || user.status === 200) {
        // login condition
        this.header.links.rightLinks[0].hidden = false;
        this.header.links.rightLinks[1].hidden = true;
      } else if (user.status === 'login_failure' || user.status !== 200) {
        // login failure
        this.alertService.alert({
          title: 'Login failure!',
          subTitle: 'Unable to login! Please try again or contact support team.',
          text: user,
          type: 'danger',
          closeDelay: 30
        });
      }
    });

    this.header = {
      brand: {
        label: 'candifood',
        url: '/',
        logo: {
          imageInAsset: 'candilogo_icon32x32.png',
          style: {
            width: '30px',
            height: '30px'
          }
        },
        style: {
          'color': '#ffe90f',
          'text-decoration': 'none'
        }
      },
      links: {
        rightLinks: [
          {label: 'Profile', url: '/profile', hidden: true},
          {label: 'login', url: '/login', hidden: false},
        ],
        leftLinks: null,
        style: {
          'background-color': '#ec7a39',
          'color': '#f6f6f6',
          'text-decoration': 'none',
          'a:link': {
            'color': '#3eff77'
          },
          'a:visited': {
            'color': '#ff9d19'
          },
          'a:hover': {
            'color': '#fe4d0e'
          },
          'a:active': {
            'color': '#ec7a39'
          }
        }
      },
      middleButton: {
        display: true,
        label: 'Trying to get location from device...',
        loading: true,
        style: {
          'background-color': '#ec9a0a',
          'color': '#ffffff'
        }
      },
      style: {
        'background-color': '#ec7a39'
      }
    };


    this.footer = {
      displayTopSection: true,
      social: {
        facebook: 'http://www.facebook.com',
        googlePlus: 'http://www.plus.google.com',
        twitter: 'http://www.twitter.com',
        linkedIn: 'http://www.linkedin.com',
      },
      copyright: {
        year: 2018,
        label: 'candifood team',
        url: 'https://www.candifood.com'
      },
      contact: {
        name: 'Aniruddha Das',
        email: 'candifoodindia@gmail.com',
        phone: '+1 415 650 9102',
        fax: '+x xxx xxx xxxx'
      },
      message: {
        heading: 'All your eating solution',
        desc: 'What we eat, it makes a difference in our life. Healthy food does not always comes with good test.' +
          'We are here to help you to be health as well as take care of your test. Just let us know you.'
      },
      columnOneLinks: [
        {label: 'login', url: '/login', hidden: false},
        {label: 'Privacy', url: '/privacy', hidden: false}
      ],
      columnTwoLinks: [
        {label: 'profile', url: '/profile', hidden: false}
      ],
      style: {
        'background-color': '#7a690b',
        'color': '#f99d00',
        'a:link': {
          'color': '#ffc11a'
        },
        'a:visited': {
          'color': '#16d3ff'
        },
        'a:hover': {
          'color': '#fbfe11'
        },
        'a:active': {
          'color': '#d0eccb'
        }
      }
    };

  }


  ngOnInit() {

    // gets the coordinates from the browser and address from google map. this happens first time
    this.mapService.getBrowserCoordinates({}).subscribe((position: Position) => {
      this.coordinates = position && position.coords;
      this.mapService.getAddressFromCoordinates({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }).subscribe((location: any) => {
        this.header.middleButton.label = location.formatted_address;
        this.header.middleButton.loading = false;
        this.changeDetectorRef.detectChanges();
        this._getRestaurantsFromMap(location);
      }, (error) => {
        this.header.middleButton.label = 'select location here.';
        this.header.middleButton.loading = false;
      });
    }, (error) => {
      this.header.middleButton.label = 'select location here.';
      this.header.middleButton.loading = false;
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
      this.header.middleButton.label = location.formatted_address;
      this.modalRef.componentInstance.input = this.location;
      this.mapService.locationBehaviorSubject.next(location);
    });
  }

  mapReady(map: GoogleMap) {
    this.mapService.map = map;
  }

  _getRestaurantsFromMap(location) {
    this.mapService.getRestaurantsFromGoogleMap(location).subscribe((restaurants: any) => {
      console.log('restaurants from map', restaurants);
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
