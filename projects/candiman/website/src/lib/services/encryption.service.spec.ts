import {TestBed, inject} from '@angular/core/testing';

import {EncryptionService} from './encryption.service';
import {HttpModule} from '@angular/http';
import {ConfigService} from '../core/services/config.service';

describe('EncryptionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        EncryptionService,
        {
        provide: ConfigService,
        useValue: {
          config: {
            ga: {
            key : 'tempPwd',
            iv : '0120'
            }
          }
        }
      }
      ]
    });
  });

  it('should encrypt the user id', inject([EncryptionService, ConfigService], (service: EncryptionService,
  config: ConfigService) => {
    const encryptedValue = service.encryptAndGet('userid');
    expect(encryptedValue).not.toEqual('');
  }));
});
