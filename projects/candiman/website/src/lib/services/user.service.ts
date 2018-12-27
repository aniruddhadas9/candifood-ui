import {Inject, Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ReplaySubject} from 'rxjs';
import {EncryptionService} from './encryption.service';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Environment} from '../website.module';


@Injectable()
export class UserService {
  private _user = new ReplaySubject();
  private _login = new ReplaySubject();
  private _logout = new ReplaySubject();

  get user() {
    return this._user.asObservable();
  }

  get login(): ReplaySubject<any> {
    return this._login;
  }

  get logout(): ReplaySubject<any> {
    return this._logout;
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

  getCurrentUser(loginPayload: Object): Observable<any> {
    return this.httpClient
      .post(this.environment.loginUrl, loginPayload)
      .pipe(
        map((response) => {
          this.userAuthorizations = response;
          this._user.next(response);
          this._login.next(true);
          return response;
        }),
        catchError((error) => {
          this._user.next({
            status: 'login_failure',
            error: error,
          });
          return of(error);
        })
      );
  }

  makeLogout() {
    this._user.next(null);
    this._logout.next(true);
    this.userAuthorizations = undefined;
  }

}
