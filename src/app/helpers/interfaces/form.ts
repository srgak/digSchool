import { ControlValueAccessor, FormGroup, Validator } from "@angular/forms";

export interface FormMain {
  form: FormGroup;
}
export interface FormSubmit {
  onSubmit(): void;
}
export interface FormTouched {
  set touched(flag: boolean);
}
export interface FormCustom extends FormMain, FormTouched, ControlValueAccessor, Validator {}