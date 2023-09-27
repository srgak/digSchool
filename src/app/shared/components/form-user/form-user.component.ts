import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { RoleData, UserData } from 'src/app/helpers/interfaces/user';
import { ToggleControls } from 'src/app/helpers/toggle-controls';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormUserComponent implements OnInit {
  @Input() public data?: UserData;
  @Output() public onComplete: EventEmitter<UserData> = new EventEmitter();
  public form: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    id: new FormControl(null),
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    patronymic: new FormControl(null, [Validators.required]),
    role: new FormControl(null, [Validators.required]),
    class: new FormControl(null, [Validators.required]),
    subjectsStudied: new FormArray([
      new FormControl(null, [Validators.required])
    ])
  });
  public roles: RoleData[] = [
    {
      name: 'Администратор',
      value: 'admin'
    },
    {
      name: 'Ученик',
      value: 'pupil'
    },
    {
      name: 'Учитель',
      value: 'teacher'
    }
  ];
  private toggleControls: ToggleControls = new ToggleControls(this.form, {
    pupil: ['class', 'subjectsStudied']
  });
  get academicSubject(): FormArray {
    return this.form.get('subjectsStudied') as FormArray;
  }

  public onSubmit(): void {
    if(this.form.valid) {
      this.onComplete.emit(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  ngOnInit(): void {
    if(this.data) {
      this.form.patchValue(this.data);
      Object.keys(this.form.controls).forEach(name => {
        if(!this.form.get(name)?.value) {
          this.form.get(name)?.disable();
        }
      });
    }
    this.form.get('role')?.valueChanges.subscribe(value => {
      this.toggleControls.toggle(value);
    });

    this.form.valueChanges.subscribe(() => {
      console.log(this.form.controls);
    });
  }
}
