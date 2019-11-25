import { TestBed } from '@angular/core/testing';

import { RoletypeService } from './roletype.service';

describe('RoletypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoletypeService = TestBed.get(RoletypeService);
    expect(service).toBeTruthy();
  });
});
