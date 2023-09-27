import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validators } from '@angular/forms';
import { switchMap } from 'rxjs';
import { SubjectData } from 'src/app/helpers/interfaces/user';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-form-user-academic-subject',
  templateUrl: './form-user-academic-subject.component.html',
  styleUrls: ['./form-user-academic-subject.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormUserAcademicSubjectComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => FormUserAcademicSubjectComponent),
      multi: true
    }
  ]
})
export class FormUserAcademicSubjectComponent implements ControlValueAccessor, Validators, OnInit, OnDestroy {
  @Input() set touched(flag: boolean) {
    if(flag) {
      this.form.markAllAsTouched();
    }
  }
  public form: FormGroup = new FormGroup({
    subject: new FormControl(null, [Validators.required]),
    teacher: new FormControl(null, [Validators.required])
  });
  public subjects: string[] = [
    'Русский язык',
    'Математика',
    'Литература',
    'Информатика'
  ];
  public teachers: string[] = [];

  constructor(
    private http: HttpService
  ) {}

  private onChange(_: SubjectData | null) {};
  private onTouch() {}
  writeValue(obj: SubjectData): void {
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
    this.form.get('subject')?.valueChanges
      .pipe(
        switchMap((subject) => this.http.getTeachers(subject))
      )
      .subscribe(data => {
        this.teachers = [];
        data.forEach(item => {
          this.teachers.push(item.firstName);
        });
      })
  }
  ngOnDestroy(): void {
    this.onChange(null);
  }
}
