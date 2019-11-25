import { TestBed } from '@angular/core/testing';

import { OneTimePasswordService } from './one-time-password.service';

describe('OneTimePasswordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OneTimePasswordService = TestBed.get(OneTimePasswordService);
    expect(service).toBeTruthy();
  });
});
