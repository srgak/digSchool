import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuLogoutDirective } from './menu-logout.directive';



@NgModule({
  declarations: [MenuLogoutDirective],
  imports: [
    CommonModule
  ],
  exports: [MenuLogoutDirective]
})
export class MenuLogoutModule { }
