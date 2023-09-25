import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserData } from 'src/app/helpers/interfaces/user';
import { pageName } from 'src/app/helpers/routes';
import { UsersService } from 'src/app/services/db/users/users.service';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.less']
})
export class ControlPanelComponent {
  public userList: Observable<UserData[]> = this.http.getUserData();
  constructor(
    public userData: UsersService,
    private router: Router,
    private http: HttpService
  ) {}
  public editUser(user: UserData): void {
    this.router.navigate([`${pageName.ControlPanel}/${pageName.ControlPanelEdit}`, user.id]);
  }
}
