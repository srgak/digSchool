import { TestBed } from '@angular/core/testing';

import { AccessTokenService } from './access-token.service';

describe('AccessTokenService', () => {
  let service: AccessTokenService;
  // const mockToken = 'testToken';

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessTokenService);
  });

  it('Создать сервис', () => {
    expect(service).toBeTruthy();
  });
  // it('Задать значение', () => {
  //   const spySet = spyOnProperty(service, 'prop', 'set').and.callThrough();

  //   service.prop = mockToken;
  //   expect(spySet).toHaveBeenCalled();
  // });
  // it('Получить значение', () => {
  //   spyOn(localStorage, 'getItem').and.returnValue(mockToken);
  //   spyOnProperty(service, 'prop', 'get').and.callThrough();
  //   expect(service.prop).toBe(mockToken);
  // });
  it('Удалить значение', () => {
    spyOn(service, 'remove').and.callThrough();
    service.remove();
    expect(service.remove).toHaveBeenCalled();
  });
});
