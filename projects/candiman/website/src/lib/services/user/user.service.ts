import {Inject, Injectable, Optional} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {EncryptionService} from '../encryption/encryption.service';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Environment} from '../../website.module';

export interface User {
  authorized?: Array<string>;
  created?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  modified?: string;
  password?: string;
  phone?: string;
  error?: string;
  status?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public userSubject: Subject<User> = new Subject<User>();
  public isLoggedIn = false;
  public authorizedUser: User;
  private token;
  public encryptedUserIdentifier: string;

  constructor(
    @Optional() @Inject('environment') private environment: Environment,
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
          this.token = response['token'] as any;
          this.userSubject.next(response);
          this.isLoggedIn = true;
          return response;
        }),
        catchError((error) => {
          this.userSubject.next({
            status: 'login_failure',
            error: error.toString(),
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
