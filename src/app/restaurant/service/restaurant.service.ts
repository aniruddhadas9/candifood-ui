import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from '../../core/services/config.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RestaurantService implements OnInit {

  constructor(private httpClient: HttpClient, private configService: ConfigService) {
  }

  ngOnInit(): void {
  }

  getRestaurants(): Observable<any> {
    return this.httpClient.get(this.configService.config.restUrl + '/restaurant/all/0/20');
  }

}
