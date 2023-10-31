import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormUserComponent } from './form-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormUserClassModule } from './form-user-class/form-user-class.module';
import { FormUserLessonModule } from './form-user-lesson/form-user-lesson.module';
import { FormListModule } from '../form-list/form-list.module';
import { SelectDataRolesService } from 'src/app/services/select-data/select-data-roles/select-data-roles.service';
import { SelectDataLessonsService } from 'src/app/services/select-data/select-data-lessons/select-data-lessons.service';
import { PasswordModule } from '../../../directives/password/password.module';
import { TransliterationModule } from '../../../directives/transliteration/transliteration.module';



@NgModule({
  declarations: [FormUserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormUserClassModule,
    FormUserLessonModule,
    FormListModule,
    PasswordModule,
    TransliterationModule
  ],
  exports: [FormUserComponent],
  providers: [
    SelectDataRolesService,
    SelectDataLessonsService
  ]
})
export class FormUserModule { }
