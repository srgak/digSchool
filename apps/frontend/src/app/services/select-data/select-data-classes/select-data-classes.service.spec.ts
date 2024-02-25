import { TestBed } from '@angular/core/testing';

import { SelectDataClassesService } from './select-data-classes.service';

describe('SelectDataClassesService', () => {
  let service: SelectDataClassesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectDataClassesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
