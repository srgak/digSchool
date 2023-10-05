import { TestBed } from '@angular/core/testing';

import { UserRoleService } from './user-role.service';

describe('UserRoleService', () => {
  let service: UserRoleService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [UserRoleService]
    });
    service = TestBed.inject(UserRoleService);
  });

  it('Создать сервис', () => {
    expect(service).toBeTruthy();
  });
  it('Задать значение', () => {
    const roleSpySet = spyOnProperty(service, 'prop', 'set');

    service.prop = 'admin';
    expect(roleSpySet).toHaveBeenCalled();
  });
  it('Получить значение', () => {
    spyOn(localStorage, 'getItem').and.returnValue('admin');
    spyOnProperty(service, 'prop', 'get').and.callThrough();
    expect(service.prop).toBe('admin');
  });
});
