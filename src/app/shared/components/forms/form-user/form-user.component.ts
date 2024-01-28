import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormMain, FormSubmit } from 'src/app/helpers/interfaces/form';
import { UserData } from 'src/app/helpers/interfaces/user';
import { ToggleControls } from 'src/app/helpers/toggle-controls';
import { FormUser } from './form-user';
import { SelectDataRolesService } from 'src/app/services/select-data/select-data-roles/select-data-roles.service';
import { SelectDataLessonsService } from 'src/app/services/select-data/select-data-lessons/select-data-lessons.service';
import { SYMBOLS_EN_TO_RU, SYMBOLS_RU_TO_EN } from 'src/app/helpers/tokens/symbols-translate';
import { FormControl } from '@angular/forms';
import { removeEmptyFields } from 'src/app/helpers/remove-emty';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormUserComponent extends FormUser implements FormMain, FormSubmit, OnInit {
  @Input() public data?: UserData;
  @Input() public set isEditable(value: boolean) {
    this.isEdit = value;
  };
  @Output() public onComplete: EventEmitter<UserData> = new EventEmitter();

  private toggleControls: ToggleControls = new ToggleControls(this.form, {
    pupil: ['class', 'lessons'],
    teacher: ['teachLesson']
  });
  constructor(
    public rolesData: SelectDataRolesService,
    public lessonsData: SelectDataLessonsService,
    @Inject(SYMBOLS_EN_TO_RU) public lettersEnToRu: Record<string, string>,
    @Inject(SYMBOLS_RU_TO_EN) public lettersRuToEn: Record<string, string>
  ) {
    super();
  }

  public onSubmit(): void {
    if(this.form.valid) {
      const data = removeEmptyFields<UserData>(this.form.value);

      this.onComplete.emit(data);
    } else {
      this.form.markAllAsTouched();
    }
  }
  private initArray(data: unknown[]): void {
    data.forEach(() => {
      this.lessons.push(
        new FormControl(null)
      );
    });
  }

  ngOnInit(): void {
    this.role?.valueChanges.subscribe(value => {
      this.toggleControls.toggle(value);
    });
    if(this.data) {
      if(this.data.lessons) this.initArray(this.data.lessons);
      this.form.patchValue(this.data);
    }
  }
}
