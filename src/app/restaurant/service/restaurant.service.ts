import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from '../../core/services/config.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RestaurantService implements OnInit {

  public location;
  public restaurant;
  public records = {
    runningStage: 'sublocality_level_2',
    sublocality_level_2Finish: false,
    locality2Finish: false,
    locality1Finish: false,
    sublocality_level_1Finish: false,
    routeFinish: false,
    city: false,
    state: false,
    localityFinish: false,
    postalCodeFinish: false,
    administrative_area_level_1Finish: false,
    administrative_area_level_2Finish: false,
    cityFinish: false,
    stateFinish: false,
    url: 'sublocality_level_2',
    param: null,
    busy: false,
    after: 0,
    finish: false,
    noOfRecord: 20
  };

  // public restaurants: Observable<any>;
  public restaurants: any = [];

  constructor(private httpClient: HttpClient, private configService: ConfigService) {
  }

  ngOnInit(): void {
  }

  getRestaurants(): Observable<any> {
    return this.httpClient.get(this.configService.config.restUrl + '/restaurant/all/0/20');
  }

  addRestaurants(restaurants: any): Observable<any> {
    return this.httpClient.post(this.configService.config.restUrl + '/restaurant/addList', restaurants);
  }

  getRestaurantsBySubLocality(locality2: string): Observable<any> {
    // https://andycandifood.appspot.com/restaurant/sublocality_level_2/undefined/0/10/
    return this.httpClient.get(this.configService.config.restUrl + '/restaurant/sublocality_level_2/' + locality2 + '/0/20');
  }


  public allItems() {
    // console.log('_allrestaurantController|allItems|this.location: %o', this.location);

    // console.log('showallitemcontroller|allItems function|start:%o', this.items);
    if (this.restaurant.busy) {
      return;
    }
    if (this.restaurant.finish) {
      return;
    }
    this.restaurant.busy = true;
    /*//console.log('showallitemcontroller|allItems function|just before baseSerive.get call:%o', this.restaurant.items);
    baseService._get('restaurant/all/'+this.restaurant.after+'/'+this.restaurant.noOfRecord).then(function(results) {
      console.log('_allrestaurantController|all|restaurants|results:%o', results);
      if (results.length <= 0 ) this.restaurant.finish = true;
      for (var i = 0; i < results.length; i++) {
        this.restaurant.items.push(results[i]);
      }*/

    if (!this.records.sublocality_level_2Finish) {
      this.records.runningStage = 'sublocality_level_2';
      this.records.url = 'sublocality_level_2';
      this.records.param = this.location.sublocality_level_2;
      this._getRestaurants();
    } else if (!this.records.sublocality_level_1Finish) {
      this.records.runningStage = 'sublocality_level_1';
      this.records.url = 'sublocality_level_1';
      this.records.param = this.location.sublocality_level_1;
      this._getRestaurants();
    } else if (!this.records.localityFinish) {
      this.records.runningStage = 'locality';
      this.records.url = 'locality';
      this.records.param = this.location.locality;
      this._getRestaurants();
    } else if (!this.records.locality2Finish) {
      this.records.runningStage = 'locality2';
      this.records.url = 'locality2';
      this.records.param = this.location.locality2;
      this._getRestaurants();
    } else if (!this.records.locality1Finish) {
      this.records.runningStage = 'locality1';
      this.records.url = 'locality1';
      this.records.param = this.location.locality1;
      this._getRestaurants();
    } else if (!this.records.routeFinish) {
      this.records.runningStage = 'route';
      this.records.url = 'route';
      this.records.param = this.location.route;
      this._getRestaurants();
    } else if (!this.records.postalCodeFinish) {
      this.records.runningStage = 'postalCode';
      this.records.url = 'postalCode';
      this.records.param = this.location.postal_code;
      this._getRestaurants();
    } else if (!this.records.city) {
      this.records.runningStage = 'city';
      this.records.url = 'city';
      this.records.param = this.location.city;
      this._getRestaurants();
    } else if (!this.records.state) {
      this.records.runningStage = 'state';
      this.records.url = 'state';
      this.records.param = this.location.state;
      this._getRestaurants();
    }

    this.restaurant.after += 20;
    this.restaurant.busy = false;

    //  });
    // console.log('showallitemcontroller|allItems function|just after baseSerive.get call:%o', this.restaurant.items);
  }

  public _getRestaurants() {
    this.httpClient.get('restaurant/' + this.records.url + '/' + this.records.param + '/' + this.records.after
      + '/' + this.records.noOfRecord).subscribe(function (results: any) {
      console.log('_allrestaurantController|' + 'url: restaurant/' + this.records.url + '/' + this.records.param
        + '/' + this.records.after + '/' + this.records.noOfRecord + '|results:%o', results);

      for (let i = 0; i < results.length; i++) {
        this.restaurant.items.push(results[i]);
      }

      // this.restaurant.items = _.unique(this.restaurant.items, 'name');

      if (results.length <= 0) {
        if (this.records.runningStage === 'sublocality_level_2') {
          this.records.after = 0;
          this.records.sublocality_level_2Finish = true;
        } else if (this.records.runningStage === 'sublocality_level_1') {
          this.records.after = 0;
          this.records.sublocality_level_1Finish = true;
        } else if (this.records.runningStage === 'locality') {
          this.records.after = 0;
          this.records.localityFinish = true;
        } else if (this.records.runningStage === 'locality2') {
          this.records.after = 0;
          this.records.locality2Finish = true;
        } else if (this.records.runningStage === 'locality1') {
          this.records.after = 0;
          this.records.locality1Finish = true;
        } else if (this.records.runningStage === 'route') {
          this.records.after = 0;
          this.records.routeFinish = true;
        } else if (this.records.runningStage === 'postalCode') {
          this.records.after = 0;
          this.records.postalCodeFinish = true;
        } else if (this.records.runningStage === 'city') {
          this.records.after = 0;
          this.records.cityFinish = true;
        } else if (this.records.runningStage === 'state') {
          this.records.after = 0;
          this.records.stateFinish = true;
        } else {
          this.restaurant.finish = true;
        }
      }

      this.restaurant.after += 10;
      this.restaurant.busy = false;

    });
  }
}
