import { TestBed, inject } from '@angular/core/testing';

import { FillService } from './fill.service';

describe('FillService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FillService]
    });
  });

  it('should be created', inject([FillService], (service: FillService) => {
    expect(service).toBeTruthy();
  }));
});
