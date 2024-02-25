import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  public validateRequired(control: AbstractControl): ValidationErrors | null {
    const {value} = control;

    return value && (value.length || Object.keys(value).length) ? null : {
      required: 'Обязательное поле'
    }
  }

  public validateEmail(control: AbstractControl): ValidationErrors | null {
    const regexp = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');

    return control.value && !regexp.test(control.value) ? {
      email: 'Неправильный адрес почты'
    } : null
  }
}
