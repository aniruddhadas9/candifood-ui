import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ReplaySubject} from 'rxjs';
import {EncryptionService} from './encryption.service';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Environment} from '../website.module';


@Injectable()
export class UserService {
  private _user = new ReplaySubject();
  get user() {
    return this._user.asObservable();
  }

  get isAuthenticated() {
    return this.userAuthorizations;
  }

  // User info returned from Herd
  userAuthorizations;
  // encrypted user id
  encryptedUserIdentifier: string;

  constructor(
    // private currentUserApi,
    @Inject('environment') private environment: Environment,
    private encryptionService: EncryptionService,
    private httpClient: HttpClient
    //  private apiConf
  ) {
  }

  getCurrentUser(url: string, email: string, password: string): Observable<any> {
    return this.httpClient
      .post(this.environment.restUrl + url, {'email': email, 'password': password})
      .pipe( map((response) => {
        if (response[0]['email'] != null) {
          this.userAuthorizations = response[0];
          this._user.next(response[0]);
        }
        return response;
      }));
  }

}
