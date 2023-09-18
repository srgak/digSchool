import { Directive, HostListener, Input, OnInit } from '@angular/core';
import { MenuButton } from '../menu-button';
import { Router } from '@angular/router';
import { AuthFlagService } from 'src/app/services/storage/auth-flag/auth-flag.service';
import { MenuItem } from 'src/app/helpers/interfaces/menu';

@Directive({
  selector: '[appMenuLogout]'
})
export class MenuLogoutDirective extends MenuButton implements OnInit {
  @Input('appMenuLogout') override data!: MenuItem;
  @HostListener('click') onClick(): void {
    this.authFlag.prop = false;
    localStorage.removeItem('id');
    this.router.navigateByUrl(this.data.link);
  }
  constructor(
    private router: Router,
    private authFlag: AuthFlagService
  ) {
    super();
  }
  ngOnInit(): void {
    this.createImg();
  }
}
