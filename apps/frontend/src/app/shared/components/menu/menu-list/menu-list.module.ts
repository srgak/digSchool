import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuListComponent } from './menu-list.component';
import { RouterModule } from '@angular/router';
import { TooltipModule } from '../../../directives/tooltip/tooltip.module';
import { MenuLogoutModule } from '../../../directives/menu/menu-logout/menu-logout.module';
import { MenuLinkModule } from '../../../directives/menu/menu-link/menu-link.module';

@NgModule({
  declarations: [MenuListComponent],
  imports: [CommonModule, MenuLinkModule, MenuLogoutModule, RouterModule, TooltipModule],
  exports: [MenuListComponent],
})
export class MenuListModule {}
