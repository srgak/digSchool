import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { ControlCustom } from '../../../../../helpers/interfaces/form';
import { FormUserClass } from './form-user-class';
import { SelectDataClassesService } from '../../../../../services/select-data/select-data-classes/select-data-classes.service';
import { validators, valueAccessor } from '../../../../../helpers/providers/custom-control';

@Component({
  selector: 'app-form-user-class',
  templateUrl: './form-user-class.component.html',
  styleUrls: ['./form-user-class.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [valueAccessor(FormUserClassComponent), validators(FormUserClassComponent)],
})
export class FormUserClassComponent
  extends FormUserClass
  implements ControlCustom, OnInit, OnDestroy
{
  @Input() set touched(flag: boolean) {
    if (flag) {
      this.control.markAsTouched();
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onChange(_: string | null): void {}

  constructor(public classesData: SelectDataClassesService) {
    super();
  }
  writeValue(obj: string): void {
    this.control.patchValue(obj);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  registerOnTouched(_: any): void {}
  validate(): ValidationErrors | null {
    return this.control.valid ? null : { required: '' };
  }

  ngOnInit(): void {
    this.control.valueChanges.subscribe((value) => {
      this.onChange(value);
    });
  }
  ngOnDestroy(): void {
    this.onChange(null);
  }
}
