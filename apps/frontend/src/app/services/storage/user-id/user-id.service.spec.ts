import { TestBed } from '@angular/core/testing';

import { UserIdService } from './user-id.service';

describe('UserIdService', () => {
  let service: UserIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserIdService]
    });
    service = TestBed.inject(UserIdService);
  });

  it('Создать сервис', () => {
    expect(service).toBeTruthy();
  });
  it('Задать значение', () => {
    const spySet = spyOnProperty(service, 'prop', 'set').and.callThrough();

    service.prop = 1;
    expect(spySet).toHaveBeenCalled();
  });
  it('Получить значение', () => {
    spyOn(localStorage, 'getItem').and.returnValue('1');
    spyOnProperty(service, 'prop', 'get').and.callThrough();
    expect(service.prop).toBe(1);
  });
});
