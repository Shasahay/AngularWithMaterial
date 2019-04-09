import { TestBed } from '@angular/core/testing';

import { CulturehelperService } from './culturehelper.service';

describe('CulturehelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CulturehelperService = TestBed.get(CulturehelperService);
    expect(service).toBeTruthy();
  });
});
