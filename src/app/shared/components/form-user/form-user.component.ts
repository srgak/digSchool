import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormMain, FormSubmit } from 'src/app/helpers/interfaces/form';
import { UserData } from 'src/app/helpers/interfaces/user';
import { ToggleControls } from 'src/app/helpers/toggle-controls';
import { FormUser } from './form-user';
import { SelectDataRolesService } from 'src/app/services/select-data/select-data-roles/select-data-roles.service';
import { SelectDataLessonsService } from 'src/app/services/select-data/select-data-lessons/select-data-lessons.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormUserComponent extends FormUser implements FormMain, FormSubmit, OnInit {
  @Input() public data?: UserData;
  @Output() public onComplete: EventEmitter<UserData> = new EventEmitter();

  private toggleControls: ToggleControls = new ToggleControls(this.form, {
    pupil: ['class', 'lessons']
  });
  constructor(
    public rolesData: SelectDataRolesService,
    public lessonsData: SelectDataLessonsService
  ) {
    super();
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
        if(!this.form.get(name)?.value || !this.form.get(name)?.value.length) {
          this.form.get(name)?.disable();
        }
      });
    }
    this.role?.valueChanges.subscribe(value => {
      this.toggleControls.toggle(value);
    });
  }
}
