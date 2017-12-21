import { ConfigService } from './config.service';
import { Observable } from 'rxjs/Observable';
import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';
import { CurrentUserService, UserAuthorizations, Configuration } from '@herd/angular-client';
import {EncryptionService} from '../../services/encryption.service';

describe('CurrentUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ConfigService,
          useValue: { config: {} }
        },
        {
          provide: Configuration,
          useValue: {} as Configuration,
          multi: false
        },
        {
          provide: CurrentUserService,
          useValue: {
            currentUserGetCurrentUserWithHttpInfo:
            jasmine.createSpy('currentUserGetCurrentUserWithHttpInfo')
              .and.returnValue(Observable.of({
                json: () => { return { userId: 'userid' } }
              })),
            configuration: {}
          }
        },
        UserService,
        {
          provide: EncryptionService,
          useValue: {
            encryptAndGet:
            jasmine.createSpy('encryptAndGet').and.returnValue('encryptedUserIdentifier')
          }
        }]
    });
  });

  it('should populate encrypted user', inject([UserService, CurrentUserService, EncryptionService],
    (service: UserService, currentUserApi: CurrentUserService, encryptionService: EncryptionService) => {
      const spyCuApi = (<jasmine.Spy>currentUserApi.currentUserGetCurrentUserWithHttpInfo)
      const spyEncrypt = (<jasmine.Spy>encryptionService.encryptAndGet)
      // this proves that we proply set and sent the observable info.
      service.user.subscribe((userInfo) => {
        expect(userInfo).toEqual(service.userAuthorizations);
      });
      service.getCurrentUser().subscribe((data) => {
        expect(data).toEqual({
          userId: 'userid'
        });
        expect(spyCuApi).toHaveBeenCalledTimes(1);
        expect(spyEncrypt).toHaveBeenCalledWith('userid');
        expect(service.encryptedUserIdentifier).toBe('encryptedUserIdentifier');
        expect(service.userAuthorizations).toEqual({
          userId: 'userid'
        });
      });
    }));

  it('should set username and password if basic auth is used and username and password are passed',
    inject([UserService, CurrentUserService, EncryptionService, Configuration, ConfigService],
      (service: UserService,
        currentUserApi: CurrentUserService,
        encryptionService: EncryptionService,
        apiConf: Configuration,
        appConf: ConfigService) => {

        // initial values
        expect(apiConf.username).not.toBeDefined();
        expect(apiConf.password).not.toBeDefined();

        service.getCurrentUser()
        // no useBasicAuth
        expect(apiConf.username).not.toBeDefined();
        expect(apiConf.password).not.toBeDefined();

        appConf.config.useBasicAuth = true;
        service.getCurrentUser()
        // no username or password passed
        expect(apiConf.username).not.toBeDefined();
        expect(apiConf.password).not.toBeDefined();

        service.getCurrentUser('tstUser')
        // no password passed
        expect(apiConf.username).not.toBeDefined();
        expect(apiConf.password).not.toBeDefined();

        service.getCurrentUser('tstUser', 'tstPassword')
        // happy path
        expect(apiConf.username).toBe('tstUser');
        expect(apiConf.password).toBe('tstPassword');
      }));

  it('should return truthy isAuthenticated if user information exists', inject([UserService],
    (service: UserService) => {
      service.userAuthorizations = {
        userId: 'userid'
      };

      expect(service.isAuthenticated).toBeTruthy();
    }));

  it('should return falsey isAuthenticated if user information doens\'t exist', inject([UserService],
    (service: UserService) => {
      // no userAuthrizations
      expect(service.isAuthenticated).toBeFalsy();

      service.userAuthorizations = { userId: '' };
      // user authorizations but no userId set in them
      expect(service.isAuthenticated).toBeFalsy();
    }));
});
