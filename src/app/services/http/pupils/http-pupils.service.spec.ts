import { TestBed } from '@angular/core/testing';

import { HttpPupilsService } from './http-pupils.service';

describe('PupilsService', () => {
  let service: HttpPupilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpPupilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
