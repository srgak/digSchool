import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserData } from 'src/app/helpers/interfaces/user';
import { pageName } from 'src/app/helpers/routes';
import { HttpUsersService } from 'src/app/services/http/users/http-users.service';

@Component({
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.less']
})
export class ControlPanelComponent {
  public userList: Observable<UserData[]> = this.httpUsers.getUserList();
  constructor(
    private router: Router,
    private httpUsers: HttpUsersService
  ) {}
  public editUser(user: UserData): void {
    this.router.navigate([`${pageName.ControlPanel}/${pageName.ControlPanelEdit}`, user.id]);
  }
}
