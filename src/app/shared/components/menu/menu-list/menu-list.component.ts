import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuData, MenuItem } from 'src/app/helpers/interfaces/menu';
import { pageName } from 'src/app/helpers/routes';
import { AccessTokenService } from 'src/app/services/storage/access-token/access-token.service';
import { UserDataService } from 'src/app/services/storage/user-data/user-data.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuListComponent {
  @Input() public menuData!: MenuData | null;
  public menuLogout: MenuItem = {
    name: 'Выход',
    link: pageName.Auth,
    img: '/assets/img/icons/logout.svg'
  };
  constructor(
    private router: Router,
    private accessToken: AccessTokenService,
    private userData: UserDataService
  ) {}

  public logOut(): void {
    this.accessToken.remove();
    this.userData.remove();
    this.router.navigateByUrl(pageName.Auth);
  }
}
