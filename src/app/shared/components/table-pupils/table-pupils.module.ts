import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablePupilsComponent } from './table-pupils.component';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [TablePupilsComponent],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [TablePupilsComponent]
})
export class TablePupilsModule { }
