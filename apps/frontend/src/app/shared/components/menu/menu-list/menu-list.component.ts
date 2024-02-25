import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuData, MenuItem } from '../../../../helpers/interfaces/menu';
import { pageName } from '../../../../helpers/routes';
import { AccessTokenService } from '../../../../services/storage/access-token/access-token.service';
import { UserDataService } from '../../../../services/storage/user-data/user-data.service';

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
