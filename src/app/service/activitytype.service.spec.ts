import { TestBed } from '@angular/core/testing';

import { ActivitytypeService } from './activitytype.service';

describe('ActivitytypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActivitytypeService = TestBed.get(ActivitytypeService);
    expect(service).toBeTruthy();
  });
});
