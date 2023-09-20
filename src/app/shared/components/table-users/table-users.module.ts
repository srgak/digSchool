import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableUsersComponent } from './table-users.component';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [TableUsersComponent],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [TableUsersComponent]
})
export class TableUsersModule { }
