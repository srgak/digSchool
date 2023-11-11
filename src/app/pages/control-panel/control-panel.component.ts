import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BreadcrumbItem } from 'src/app/helpers/interfaces/breadcrumbs';
import { UserData } from 'src/app/helpers/interfaces/user';
import { pageName } from 'src/app/helpers/routes';
import { BREADCRUMBS } from 'src/app/helpers/tokens/breadcrumbs';
import { BreadcrumbsService } from 'src/app/services/breadcrumbs/breadcrumbs.service';
import { HttpUsersService } from 'src/app/services/http/users/http-users.service';

@Component({
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.less']
})
export class ControlPanelComponent {
  public userList: Observable<UserData[]> = this.httpUsers.getUserList();
  constructor(
    private router: Router,
    private httpUsers: HttpUsersService,
    @Inject(BREADCRUMBS) private breadcrumbs: Observable<BreadcrumbItem[]>,
    private breadcrumbsData: BreadcrumbsService
  ) {
    this.breadcrumbsData.current = this.breadcrumbs;
  }
  public editUser(user: UserData): void {
    this.router.navigate([`${pageName.ControlPanel}/${pageName.ControlPanelEdit}`, user.id]);
  }
}
