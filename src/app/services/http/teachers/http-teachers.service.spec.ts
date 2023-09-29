import { TestBed } from '@angular/core/testing';

import { HttpTeachersService } from './http-teachers.service';

describe('HttpTeachersService', () => {
  let service: HttpTeachersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpTeachersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
