import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormMain, FormSubmit } from 'src/app/helpers/interfaces/form';
import { UserData } from 'src/app/helpers/interfaces/user';
import { ToggleControls } from 'src/app/helpers/toggle-controls';
import { FormUser } from './form-user';
import { SelectDataRolesService } from 'src/app/services/select-data/select-data-roles/select-data-roles.service';
import { SelectDataLessonsService } from 'src/app/services/select-data/select-data-lessons/select-data-lessons.service';
import { SYMBOLS_EN_TO_RU, SYMBOLS_RU_TO_EN } from 'src/app/helpers/tokens/symbols-translate';
import { SimpleObject } from 'src/app/helpers/interfaces/common';
import { FormControl } from '@angular/forms';

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
    pupil: ['class', 'lessons'],
    teacher: ['teachLesson']
  });
  constructor(
    public rolesData: SelectDataRolesService,
    public lessonsData: SelectDataLessonsService,
    @Inject(SYMBOLS_EN_TO_RU) public lettersEnToRu: SimpleObject<string>,
    @Inject(SYMBOLS_RU_TO_EN) public lettersRuToEn: SimpleObject<string>
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
