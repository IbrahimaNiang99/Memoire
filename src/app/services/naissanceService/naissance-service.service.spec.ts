import { TestBed } from '@angular/core/testing';

import { NaissanceServiceService } from './naissance-service.service';

describe('NaissanceServiceService', () => {
  let service: NaissanceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NaissanceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
