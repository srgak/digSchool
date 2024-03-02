import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormUserLessonComponent } from './form-user-lesson.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [FormUserLessonComponent],
  imports: [CommonModule, MatSelectModule, ReactiveFormsModule],
  exports: [FormUserLessonComponent],
})
export class FormUserLessonModule {}
