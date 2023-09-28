import { TestBed } from '@angular/core/testing';

import { SelectDataLessonsService } from './select-data-lessons.service';

describe('SelectDataLessonsService', () => {
  let service: SelectDataLessonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectDataLessonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
