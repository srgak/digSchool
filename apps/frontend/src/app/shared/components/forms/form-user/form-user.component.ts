import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormMain, FormSubmit } from '../../../../helpers/interfaces/form';
import { ToggleControls } from '../../../../helpers/toggle-controls';
import { FormUser } from './form-user';
import { SelectDataRolesService } from '../../../../services/select-data/select-data-roles/select-data-roles.service';
import { SelectDataLessonsService } from '../../../../services/select-data/select-data-lessons/select-data-lessons.service';
import { SYMBOLS_EN_TO_RU, SYMBOLS_RU_TO_EN } from '../../../../helpers/tokens/symbols-translate';
import { FormControl } from '@angular/forms';
import { removeEmptyFields } from '../../../../helpers/remove-emty';
import { UserData } from 'libs/api-interfaces/src';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormUserComponent extends FormUser implements FormMain, FormSubmit, OnInit {
  @Input() public data?: UserData;
  @Input() public set isEditable(value: boolean) {
    this.isEdit = value;
  }
  @Output() public readonly onComplete: EventEmitter<UserData> = new EventEmitter();

  private readonly toggleControls: ToggleControls = new ToggleControls(this.form, {
    pupil: ['class', 'lessons'],
    teacher: ['teachLesson'],
  });
  constructor(
    public rolesData: SelectDataRolesService,
    public lessonsData: SelectDataLessonsService,
    @Inject(SYMBOLS_EN_TO_RU) public lettersEnToRu: Record<string, string>,
    @Inject(SYMBOLS_RU_TO_EN) public lettersRuToEn: Record<string, string>,
  ) {
    super();
  }

  public onSubmit(): void {
    if (this.form.valid) {
      const data = removeEmptyFields<UserData>(this.form.value);

      this.onComplete.emit(data);
    } else {
      this.form.markAllAsTouched();
    }
  }
  private initArray(data: unknown[]): void {
    data.forEach(() => {
      this.lessons.push(new FormControl(null));
    });
  }

  ngOnInit(): void {
    this.role?.valueChanges.subscribe((value) => {
      this.toggleControls.toggle(value);
    });

    if (this.data) {
      if (this.data.lessons) this.initArray(this.data.lessons);

      this.form.patchValue(this.data);
    }
  }
}
