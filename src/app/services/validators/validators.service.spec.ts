import { TestBed } from '@angular/core/testing';

import { ValidatorsService } from './validators.service';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

describe('ValidatorsService', () => {
  let service: ValidatorsService;
  let mockControl: AbstractControl;
  const checkRequired = (service: ValidatorsService, control: AbstractControl): ValidationErrors | null => {
    spyOn(service, 'validateRequired').and.callThrough();
    const error = service.validateRequired(control);
    expect(service.validateRequired).toHaveBeenCalled();

    return error;
  };
  const checkEmail = (service: ValidatorsService, control: AbstractControl): ValidationErrors | null => {
    spyOn(service, 'validateEmail').and.callThrough();
    const error = service.validateEmail(control);
    expect(service.validateEmail).toHaveBeenCalled();

    return error;
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidatorsService]
    });
    service = TestBed.inject(ValidatorsService);
    mockControl = new FormControl();
  });

  afterEach(() => {
    mockControl.reset();
  });

  it('Создать сервис', () => {
    expect(service).toBeTruthy();
  });
  it('Валидация required с ошибкой', () => {
    const error = checkRequired(service, mockControl);
    expect(error).not.toBeNull();
    expect(error!['required']).toBe('Обязательное поле');
  });
  it('Валидация required с успехом', () => {
    mockControl.setValue('test');
    const error = checkRequired(service, mockControl);
    expect(error).toBeNull();
  });
  it('Валидация email с ошибкой при значении testemail', () => {
    mockControl.setValue('testemail');
    const error = checkEmail(service, mockControl);
    expect(error).not.toBeNull();
    expect(error!['email']).toBe('Неправильный адрес почты');
    
  });
  it('Валидация email с ошибкой при значении test@test', () => {
    mockControl.setValue('test@test');
    const error = checkEmail(service, mockControl);
    expect(error).not.toBeNull();
    expect(error!['email']).toBe('Неправильный адрес почты');
  });
  it('Валидация email с успехом', () => {
    mockControl.setValue('test@email.ru');
    const error = checkEmail(service, mockControl);
    expect(error).toBeNull();
  });
});
