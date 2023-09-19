import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuLinkModule } from './menu/menu-link/menu-link.module';
import { MenuLogoutModule } from './menu/menu-logout/menu-logout.module';
import { TooltipModule } from './tooltip/tooltip.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MenuLinkModule,
    MenuLogoutModule,
    TooltipModule
  ]
})
export class DirectivesModule { }
