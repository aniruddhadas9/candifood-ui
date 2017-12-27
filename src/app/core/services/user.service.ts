import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {Response, URLSearchParams} from '@angular/http';
import {EncryptionService} from '../../services/encryption.service';
import {ConfigService} from './config.service';


@Injectable()
export class UserService {
  private _user = new ReplaySubject();
  get user() {
    return this._user.asObservable();
  }

  get isAuthenticated() {
    return this.userAuthorizations && this.userAuthorizations.userId;
  }

  // User info returned from Herd
  userAuthorizations;
  // encrypted user id
  encryptedUserIdentifier: string;

  constructor(// private currentUserApi,
    private encryptionService: EncryptionService,
    private conf: ConfigService,
   //  private apiConf
  ) {
  }

  getCurrentUser(username?: string, password?: string): Observable<any> {
    /*if (this.conf.config.useBasicAuth && username && password) {
      this.apiConf.username = username;
      this.apiConf.password = password;
    }*/
    // the added timestamp of the query string forces legacy browsers to not cache the http response
    // for current user.  this fixes current user differentiated tests.
    const search = new URLSearchParams(`v=${Date.now()}`.toString());
    /* return this.currentUserApi.currentUserGetCurrentUserWithHttpInfo({search}).map((res) => {
       this.userAuthorizations = res.json();
       this._user.next(res.json());
       this.encryptedUserIdentifier = this.encryptionService.encryptAndGet((res.json()).userId);
       return res.json();
     });*/

    return Observable.of({'status': true});
  }

}
