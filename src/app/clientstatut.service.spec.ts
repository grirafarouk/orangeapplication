import { TestBed } from '@angular/core/testing';

import { ClientstatutService } from './clientstatut.service';

describe('ClientstatutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientstatutService = TestBed.get(ClientstatutService);
    expect(service).toBeTruthy();
  });
});
