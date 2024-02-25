import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormUserClassComponent } from './form-user-class.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SelectDataClassesService } from '../../../../../services/select-data/select-data-classes/select-data-classes.service';



@NgModule({
  declarations: [FormUserClassComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  exports: [FormUserClassComponent],
  providers: [
    SelectDataClassesService
  ]
})
export class FormUserClassModule { }
