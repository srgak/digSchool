import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from 'src/app/helpers/interfaces/user';
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
    console.log(user);
    // this.router.navigate(['dashboard', user]);
  }
}
