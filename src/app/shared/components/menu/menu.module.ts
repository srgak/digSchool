import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuListModule } from './menu-list/menu-list.module';
import { menuSettingsProvide } from 'src/app/helpers/providers/menu-settings';


@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    MenuListModule
  ],
  exports: [MenuComponent],
  providers: [
    menuSettingsProvide
  ]
})
export class MenuModule { }