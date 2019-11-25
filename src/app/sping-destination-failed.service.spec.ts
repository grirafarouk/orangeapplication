import { TestBed } from '@angular/core/testing';

import { SpingDestinationFailedService } from './sping-destination-failed.service';

describe('SpingDestinationFailedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpingDestinationFailedService = TestBed.get(SpingDestinationFailedService);
    expect(service).toBeTruthy();
  });
});
