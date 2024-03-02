import { forwardRef, Provider } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';

export const valueAccessor = (component: any): Provider => ({
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => component),
  multi: true,
});

export const validators = (component: any): Provider => ({
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => component),
  multi: true,
});
