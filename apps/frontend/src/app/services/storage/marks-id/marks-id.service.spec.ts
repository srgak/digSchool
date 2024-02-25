import { TestBed } from '@angular/core/testing';

import { MarksIdService } from './marks-id.service';

describe('MarksIdService', () => {
  let service: MarksIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarksIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
