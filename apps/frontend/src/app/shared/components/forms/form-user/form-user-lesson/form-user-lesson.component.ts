import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { FormCustom } from '../../../../../helpers/interfaces/form';
// import { LessonData } from '../../../../../helpers/interfaces/user';
import { FormUserLesson } from './form-user-lessons';
import { SelectDataLessonsService } from '../../../../../services/select-data/select-data-lessons/select-data-lessons.service';
import { validators, valueAccessor } from '../../../../../helpers/providers/custom-control';
import { GraphqlTeachersService } from '../../../../../services/graphQL/teachers/graphql-teachers.service';
import { LessonData } from 'libs/api-interfaces/src';

@Component({
  selector: 'app-form-user-lesson',
  templateUrl: './form-user-lesson.component.html',
  styleUrls: ['./form-user-lesson.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [valueAccessor(FormUserLessonComponent), validators(FormUserLessonComponent)],
})
export class FormUserLessonComponent
  extends FormUserLesson
  implements FormCustom, OnInit, OnDestroy
{
  @Input() set touched(flag: boolean) {
    if (flag) {
      this.form.markAllAsTouched();
    }
  }

  public teachers$: Observable<string[]> = this.graphQLTeachers
    .getTeachers(['firstName'])
    .pipe(map((data) => data.map((item) => item.firstName)));

  constructor(
    private readonly graphQLTeachers: GraphqlTeachersService,
    public lessonsData: SelectDataLessonsService,
  ) {
    super();
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onChange(_: LessonData | null): void {}
  writeValue(obj: LessonData): void {
    this.form.patchValue(obj);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  registerOnTouched(_: any): void {}
  validate(): ValidationErrors | null {
    return this.form.valid ? null : { required: '' };
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe((value) => {
      this.onChange(value);
    });
  }
  ngOnDestroy(): void {
    this.onChange(null);
  }
}
