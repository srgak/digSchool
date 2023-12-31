import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, forwardRef } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';
import { ControlCustom } from 'src/app/helpers/interfaces/form';
import { FormUserClass } from './form-user-class';
import { SelectDataClassesService } from 'src/app/services/select-data/select-data-classes/select-data-classes.service';
import { validators, valueAccessor } from 'src/app/helpers/providers/custom-control';

@Component({
  selector: 'app-form-user-class',
  templateUrl: './form-user-class.component.html',
  styleUrls: ['./form-user-class.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    valueAccessor(FormUserClassComponent),
    validators(FormUserClassComponent)
  ]
})
export class FormUserClassComponent extends FormUserClass implements ControlCustom, OnInit, OnDestroy {
  @Input() set touched(flag: boolean) {
    if(flag) {
      this.control.markAsTouched();
    }
  }
  private onChange(_: string | null) {};
  private onTouch() {};

  constructor(
    public classesData: SelectDataClassesService
  ) {
    super();
  }
  writeValue(obj: string): void {
    this.control.patchValue(obj);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  validate(): ValidationErrors | null {
    return this.control.valid ? null : {required: ''}
  }

  ngOnInit(): void {
    this.control.valueChanges.subscribe(value => {
      this.onChange(value);
    });
  }
  ngOnDestroy(): void {
    this.onChange(null);
  }
}
