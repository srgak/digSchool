import { Directive, HostListener, Input, OnInit } from '@angular/core';
import { MenuButton } from '../menu-button';
import { Router } from '@angular/router';
import { MenuItem } from 'libs/api-interfaces/src';

@Directive({
  selector: '[uiMenuLogout]',
})
export class MenuLogoutDirective extends MenuButton implements OnInit {
  @Input('uiMenuLogout') override data!: MenuItem;
  @HostListener('click') onClick(): void {
    localStorage.clear();
    this.router.navigateByUrl(this.data.link);
  }
  constructor(private readonly router: Router) {
    super();
  }
  ngOnInit(): void {
    this.createImg();
  }
}
