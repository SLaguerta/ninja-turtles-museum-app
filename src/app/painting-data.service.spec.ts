import { TestBed } from '@angular/core/testing';

import { PaintingDataService } from './painting-data.service';

describe('PaintingDataService', () => {
  let service: PaintingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaintingDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
