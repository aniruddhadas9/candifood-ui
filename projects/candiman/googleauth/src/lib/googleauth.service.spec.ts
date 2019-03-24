import { TestBed } from '@angular/core/testing';

import { GoogleauthService } from './googleauth.service';

describe('GoogleauthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleauthService = TestBed.get(GoogleauthService);
    expect(service).toBeTruthy();
  });
});
