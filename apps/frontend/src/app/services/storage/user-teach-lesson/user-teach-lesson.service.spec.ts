import { TestBed } from '@angular/core/testing';

import { UserTeachLessonService } from './user-teach-lesson.service';

describe('UserTeachLessonService', () => {
  let service: UserTeachLessonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserTeachLessonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
