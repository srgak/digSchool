import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormUserAcademicSubjectComponent } from './form-user-academic-subject.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [FormUserAcademicSubjectComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  exports: [FormUserAcademicSubjectComponent]
})
export class FormUserAcademicSubjectModule { }
