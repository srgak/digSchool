import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableMarksComponent } from './table-marks.component';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [TableMarksComponent],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [TableMarksComponent]
})
export class TableMarksModule { }
