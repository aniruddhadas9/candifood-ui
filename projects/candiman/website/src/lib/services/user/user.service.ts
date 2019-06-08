import {Inject, Injectable} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {ReplaySubject} from 'rxjs';
import {EncryptionService} from '../encryption/encryption.service';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Environment} from '../../website.module';


@Injectable()
export class UserService {
  public userSubject: Subject<any> = new Subject<any>();
  public isLoggedIn = false;
  public authorizedUser;
  // encrypted user id
  public encryptedUserIdentifier: string;

  constructor(
    // private currentUserApi,
    @Inject('environment') private environment: Environment,
    private encryptionService: EncryptionService,
    private httpClient: HttpClient
  ) {
  }

  login(loginPayload: Object): Observable<any> {
    return this.httpClient
      .post(this.environment.loginUrl, loginPayload)
      .pipe(
        map((response) => {
          this.authorizedUser = response;
          this.userSubject.next(response);
          this.isLoggedIn = true;
          return response;
        }),
        catchError((error) => {
          this.userSubject.next({
            status: 'login_failure',
            error: error,
          });
          return of(error);
        })
      );
  }

  makeLogout() {
    this.userSubject.next(null);
    this.isLoggedIn = false;
    this.authorizedUser = undefined;
  }

}
