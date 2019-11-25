import { TestBed } from '@angular/core/testing';

import { MapContactNumberService } from './map-contact-number.service';

describe('MapContactNumberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MapContactNumberService = TestBed.get(MapContactNumberService);
    expect(service).toBeTruthy();
  });
});
