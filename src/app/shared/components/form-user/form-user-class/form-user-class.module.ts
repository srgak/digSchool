import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormUserClassComponent } from './form-user-class.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [FormUserClassComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [FormUserClassComponent]
})
export class FormUserClassModule { }
