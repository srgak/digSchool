import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuListComponent } from './menu-list.component';
import { RouterModule } from '@angular/router';
import { MenuLinkModule } from '../../../directives/menu/menu-link/menu-link.module';
import { MenuLogoutModule } from '../../../directives/menu/menu-logout/menu-logout.module';



@NgModule({
  declarations: [MenuListComponent],
  imports: [
    CommonModule,
    RouterModule,
    MenuLinkModule,
    MenuLogoutModule
  ],
  exports: [MenuListComponent]
})
export class MenuListModule { }
