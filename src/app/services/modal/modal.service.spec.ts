import { TestBed } from '@angular/core/testing';

import { ModalService } from './modal.service';

fdescribe('ModalService', () => {
  let service: ModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModalService]
    });
    service = TestBed.inject(ModalService);
  });

  it('Создать сервис', () => {
    expect(service).toBeTruthy();
  });

  it('Открыть модалку', () => {
    spyOn(service, 'openModal').and.callThrough();
    service.openModal('error', 'test');
    expect(service.openModal).toHaveBeenCalled();
  });
});
