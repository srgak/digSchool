import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from './menu/menu.module';
import { TableUsersModule } from './table-users/table-users.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MenuModule,
    TableUsersModule
  ]
})
export class ComponentsModule { }
