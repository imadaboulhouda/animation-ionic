import { TestBed } from '@angular/core/testing';

import { DataDummyService } from './data-dummy.service';

describe('DataDummyService', () => {
  let service: DataDummyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataDummyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
