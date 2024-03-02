import { TestBed } from '@angular/core/testing';

import { SelectDataRolesService } from './select-data-roles.service';

describe('SelectDataRolesService', () => {
  let service: SelectDataRolesService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [SelectDataRolesService],
    });

    service = TestBed.inject(SelectDataRolesService);
  });

  it('Создать сервис', () => {
    expect(service).toBeTruthy();
  });
  it('Проверить наличие параметров', () => {
    expect(service.list.length).toBeTruthy();
  });
});
