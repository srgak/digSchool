import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormUserComponent } from './form-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormUserClassModule } from './form-user-class/form-user-class.module';



@NgModule({
  declarations: [FormUserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormUserClassModule
  ],
  exports: [FormUserComponent]
})
export class FormUserModule { }
