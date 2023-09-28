import { TestBed } from '@angular/core/testing';

import { SelectDataRolesService } from './select-data-roles.service';

describe('SelectDataRolesService', () => {
  let service: SelectDataRolesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectDataRolesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
