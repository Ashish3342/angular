import { TestBed } from '@angular/core/testing';

import { ConSerService } from './con-ser.service';

describe('ConSerService', () => {
  let service: ConSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
