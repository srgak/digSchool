import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { routeName } from '../../../../helpers/routes';
import { AccessTokenService } from '../../../../services/storage/access-token/access-token.service';
import { UserDataService } from '../../../../services/storage/user-data/user-data.service';
import { MenuItem } from 'libs/api-interfaces/src';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuListComponent {
  @Input() public menuData!: MenuItem[] | null;
  public menuLogout: MenuItem = {
    name: 'Выход',
    link: routeName.Auth,
    img: '/assets/img/icons/logout.svg',
  };
  constructor(
    private readonly router: Router,
    private readonly accessToken: AccessTokenService,
    private readonly userData: UserDataService,
  ) {}

  public logOut(): void {
    this.accessToken.remove();
    this.userData.remove();
    this.router.navigateByUrl(routeName.Auth);
  }
}
