import { TestBed, inject } from '@angular/core/testing';

import { AuthGuardService } from './auth-guard.service';
import { Router } from '@angular/router';
import {ConfigService} from './config.service';
import {UserService} from './user.service';

describe('AuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuardService,
        {
          provide: ConfigService,
          useValue: {
            config: {}
          },
        }, /*{
          provide: Router,
          useClass: RouterStub
        },*/ {
          provide: UserService,
          useValue: {
            getCurrentUser: jasmine.createSpy('getCurrentUser')
          }
        }
      ]
    });
  });

  it('should be created', inject([AuthGuardService], (service: AuthGuardService) => {
    expect(service).toBeDefined();
  }));

  /*it('should not call load if already authenticated', inject([AuthGuardService, ConfigService, Router],
    (service: AuthGuardService, appConfig: ConfigService, router: Router, userService: UserService) => {
    }));*/

});
