import { TestBed } from '@angular/core/testing';

import { OderServiceService } from './oder.service.service';

describe('OderServiceService', () => {
  let service: OderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
