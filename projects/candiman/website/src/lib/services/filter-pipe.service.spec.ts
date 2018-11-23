import { TestBed, inject } from '@angular/core/testing';

import { FilterPipeService } from './filter-pipe.service';

describe('FilterPipeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterPipeService]
    });
  });

  it('should be created', inject([FilterPipeService], (service: FilterPipeService) => {
    expect(service).toBeTruthy();
  }));
});
