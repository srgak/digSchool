import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuListModule } from './menu-list/menu-list.module';


@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    MenuListModule
  ],
  exports: [MenuComponent]
})
export class MenuModule { }
