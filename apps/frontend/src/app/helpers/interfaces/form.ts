import { ControlValueAccessor, FormControl, FormGroup, Validator } from '@angular/forms';

export interface FormMain {
  form: FormGroup;
}
export interface FormSubmit {
  onSubmit(): void;
}
export interface FormTouched {
  set touched(flag: boolean);
}
export interface ControlMain {
  control: FormControl;
}
export interface FormCustom extends FormMain, FormTouched, ControlValueAccessor, Validator {}
export interface ControlCustom extends ControlMain, FormTouched, ControlValueAccessor, Validator {}
