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

  getCurrentUser(loginPayload: Object): Observable<any> {
    return this.httpClient
      .post(this.environment.loginUrl, loginPayload)
      .pipe(
        map((response) => {
          console.log('UserService|getCurrentUser|pipe|map|resposne: %o', response);
          this.userAuthorizations = response;
          this._user.next(response);
          return response;
        }),
        catchError((error) => {
          console.log('UserService|getCurrentUser|pipe|catchError|resposne: %o', error);
          this._user.next(error);
          return of(error);
        })
      );
  }

}
