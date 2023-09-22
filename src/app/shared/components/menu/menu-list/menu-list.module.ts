import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuListComponent } from './menu-list.component';
import { RouterModule } from '@angular/router';
import { TooltipModule } from 'src/app/shared/directives/tooltip/tooltip.module';
import { MenuLogoutModule } from 'src/app/shared/directives/menu/menu-logout/menu-logout.module';
import { MenuLinkModule } from 'src/app/shared/directives/menu/menu-link/menu-link.module';



@NgModule({
  declarations: [MenuListComponent],
  imports: [
    CommonModule,
    RouterModule,
    TooltipModule,
    MenuLogoutModule,
    MenuLinkModule
  ],
  exports: [MenuListComponent]
})
export class MenuListModule { }
