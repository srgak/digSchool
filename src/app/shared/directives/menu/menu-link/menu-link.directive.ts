import { Directive, Input, OnInit } from '@angular/core';
import { MenuButton } from '../menu-button';
import { MenuItem } from 'src/app/helpers/interfaces/menu';

@Directive({
  selector: '[appMenuLink]'
})
export class MenuLinkDirective extends MenuButton implements OnInit {
  @Input('appMenuLink') public override data!: MenuItem;
  constructor() {
    super();
  }
  ngOnInit(): void {
    this.createImg();
  }
}
