import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuLinkDirective } from './menu-link.directive';

@NgModule({
  declarations: [MenuLinkDirective],
  imports: [CommonModule, RouterModule],
  exports: [MenuLinkDirective],
})
export class MenuLinkModule {}
