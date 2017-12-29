import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ConfigService} from '../../services/config.service';
import {MapService} from '../../../location/service/map.service';
import {AppService} from '../../../services/app.service';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {AlertService} from '../../services/alert.service';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ChangeLocationModelComponent} from '../change-location-model/change-location-model.component';

@Component({
  selector: 'cfs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {

  public location: any = [];
  public searchForm: FormGroup;
  private term: AbstractControl;
  public loading: boolean;
  public modalRef;

  constructor(private mapService: MapService,
              private modalService: NgbModal,
              private router: Router,
              private configService: ConfigService,
              private appService: AppService,
              private userService: UserService,
              private alertService: AlertService) {

    this.searchForm = new FormGroup({
      term: new FormControl('', [Validators.required]),
    });

    this.term = this.searchForm.controls['term'];

  }

  ngOnInit() {
    this.mapService.getLocation({}).subscribe((position: Position) => {
      this.mapService.getUserLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }).subscribe((location) => {
        console.log(location);
        this.location = location;
      });
    });
  }

  changeLocation() {
    this.mapService.getLocation({}).subscribe((position: Position) => {
      this.mapService.getUserLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }).subscribe((location) => {
        console.log('getUserFromMap|location:%o', location);
        this.location = location;
        this.mapService.getUserRestaurants(location).subscribe((restaurants) => {
          console.log('getUserFromMap|restaurants:%o', restaurants);
        });
      });
    });
  }


  open() {
    this.modalRef = this.modalService.open(ChangeLocationModelComponent, {windowClass: 'location-change-modal'});
    this.modalRef.componentInstance.input = this.location;
    this.modalRef.componentInstance.output.subscribe((ouput) => {
      console.log(ouput);
    });
  }

  onSubmit() {
    if (this.searchForm.valid) {
      this.loading = true;
      this.userService.getCurrentUser(this.searchForm.value.username, this.searchForm.value.password)
        .finally(() => {
          this.loading = false;
        }).subscribe((response) => {
        // navigate by url is used due to the fact that the returnUrl may have optional params which need to be parsed.
        // same is true for query params
        // this.router.navigateByUrl(this.returnUrl, {replaceUrl: true});
        // if the location is changed, reload the whole data for the user
      }, (error) => {
        this.alertService.alert({
          title: 'Login failure!',
          subTitle: 'Unable to login! Please try again or contact support team.',
          text: error,
          type: 'danger'
        });
      });
    }
  }

}
