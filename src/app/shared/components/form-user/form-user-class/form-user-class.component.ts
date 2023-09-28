import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, forwardRef } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';
import { FormCustom } from 'src/app/helpers/interfaces/form';
import { ClassData } from 'src/app/helpers/interfaces/user';
import { FormUserClass } from './form-user-class';

@Component({
  selector: 'app-form-user-class',
  templateUrl: './form-user-class.component.html',
  styleUrls: ['./form-user-class.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormUserClassComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => FormUserClassComponent),
      multi: true
    }
  ]
})
export class FormUserClassComponent extends FormUserClass implements FormCustom, OnInit, OnDestroy {
  @Input() set touched(flag: boolean) {
    if(flag) {
      this.form.markAllAsTouched();
    }
  }
  private onChange(_: ClassData | null) {};
  private onTouch() {}
  writeValue(obj: ClassData): void {
    this.form.patchValue(obj);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  validate(): ValidationErrors | null {
    return this.form.valid ? null : {required: ''}
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(value => {
      this.onChange(value);
    });
  }
  ngOnDestroy(): void {
    this.onChange(null);
  }
}
