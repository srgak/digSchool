import { Directive, Input, OnInit } from '@angular/core';
import { MenuButton } from '../menu-button';
import { MenuItem } from '../../../../helpers/interfaces/menu';

@Directive({
  selector: '[uiMenuLink]',
})
export class MenuLinkDirective extends MenuButton implements OnInit {
  @Input('uiMenuLink') public override data!: MenuItem;
  constructor() {
    super();
  }
  ngOnInit(): void {
    this.createImg();
  }
}
