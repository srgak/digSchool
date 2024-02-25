import { TestBed } from '@angular/core/testing';

import { SelectDataLessonsService } from './select-data-lessons.service';

describe('SelectDataLessonsService', () => {
  let service: SelectDataLessonsService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [SelectDataLessonsService]
    });

    service = TestBed.inject(SelectDataLessonsService);
  });

  it('Должен создасться', () => {
    expect(service).toBeTruthy();
  });
  it('Проверить наличие предметов', () => {
    expect(service.list.length).toBeTruthy()
  });
});
