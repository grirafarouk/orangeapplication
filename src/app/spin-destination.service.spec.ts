import { TestBed } from '@angular/core/testing';

import { SpinDestinationService } from './spin-destination.service';

describe('SpinDestinationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpinDestinationService = TestBed.get(SpinDestinationService);
    expect(service).toBeTruthy();
  });
});
