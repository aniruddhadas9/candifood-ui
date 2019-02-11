import { TestBed } from '@angular/core/testing';

import { GoogleApiConfigService } from './google-api-config.service';

describe('GoogleApiConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleApiConfigService = TestBed.get(GoogleApiConfigService);
    expect(service).toBeTruthy();
  });
});
