import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from 'src/app/helpers/interfaces/user';
import { pageName } from 'src/app/helpers/routes';
import { UsersService } from 'src/app/services/db/users/users.service';

@Component({
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.less']
})
export class ControlPanelComponent {
  constructor(
    public userData: UsersService,
    private router: Router
  ) {}
  public editUser(user: UserData): void {
    this.router.navigate([`${pageName.ControlPanel}/${pageName.ControlPanelEdit}`, user.id]);
  }
}
