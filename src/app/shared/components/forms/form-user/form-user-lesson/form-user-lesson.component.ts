import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, forwardRef } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';
import { Observable, map, switchMap, tap } from 'rxjs';
import { FormCustom } from 'src/app/helpers/interfaces/form';
import { LessonData } from 'src/app/helpers/interfaces/user';
import { FormUserLesson } from './form-user-lessons';
import { SelectDataLessonsService } from 'src/app/services/select-data/select-data-lessons/select-data-lessons.service';
import { validators, valueAccessor } from 'src/app/helpers/providers/custom-control';
import { GraphqlTeachersService } from 'src/app/services/graphQL/teachers/graphql-teachers.service';

@Component({
  selector: 'app-form-user-lesson',
  templateUrl: './form-user-lesson.component.html',
  styleUrls: ['./form-user-lesson.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    valueAccessor(FormUserLessonComponent),
    validators(FormUserLessonComponent)
  ]
})
export class FormUserLessonComponent extends FormUserLesson implements FormCustom, OnInit, OnDestroy {
  @Input() set touched(flag: boolean) {
    if(flag) {
      this.form.markAllAsTouched();
    }
  }
  
  public teachers$: Observable<string[]> = this.graphQLTeachers.getTeachers(['firstName'])
    .pipe(
      map(data => data.map(item => item.firstName))
    );

  constructor(
    private graphQLTeachers: GraphqlTeachersService,
    public lessonsData: SelectDataLessonsService
  ) {
    super();
  }

  private onChange(_: LessonData | null) {};
  private onTouch() {}
  writeValue(obj: LessonData): void {
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
