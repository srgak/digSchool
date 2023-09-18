import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuData, MenuItem } from 'src/app/helpers/interfaces/menu';
import { pageName } from 'src/app/helpers/routes';
import { AuthFlagService } from 'src/app/services/storage/auth-flag/auth-flag.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuListComponent {
  public menuData: MenuData = [
    {
      name: 'Главная',
      link: pageName.Main,
      img: ''
    },
    {
      name: 'Панель управления пользователями',
      link: '',
      img: ''
    }
  ];
  public menuLogout: MenuItem = {
    name: 'Выход',
    link: pageName.Auth,
    img: ''
  };
  constructor(
    private router: Router,
    private authFlag: AuthFlagService
  ) {}

  public logOut(): void {
    this.authFlag.prop = false;
    localStorage.removeItem('id');
    this.router.navigateByUrl(pageName.Auth);
  }
}
