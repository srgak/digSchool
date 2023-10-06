import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableUsersComponent } from './table-users.component';
import { MatTableModule } from '@angular/material/table';
import { SurnameNpModule } from '../../pipes/surname-np/surname-np.module';



@NgModule({
  declarations: [TableUsersComponent],
  imports: [
    CommonModule,
    MatTableModule,
    SurnameNpModule
  ],
  exports: [TableUsersComponent]
})
export class TableUsersModule { }
