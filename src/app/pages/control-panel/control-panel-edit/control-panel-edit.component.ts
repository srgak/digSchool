import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserData } from 'src/app/helpers/interfaces/user';
import { pageName } from 'src/app/helpers/routes';
import { UsersService } from 'src/app/services/db/users/users.service';
import { FormUserModule } from 'src/app/shared/components/form-user/form-user.module';

@Component({
  selector: 'app-control-panel-edit',
  templateUrl: './control-panel-edit.component.html',
  styleUrls: ['./control-panel-edit.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    FormUserModule
  ]
})
export class ControlPanelEditComponent {
  constructor(
    public activatedRoute: ActivatedRoute,
    private userData: UsersService,
    private router: Router
  ) {}

  public editUser(user: UserData): void {
    this.userData.DB.put(user);
    this.router.navigateByUrl(pageName.ControlPanel);
  }
  public deleteUser(): void {
    this.userData.DB.delete(this.activatedRoute.snapshot.data['id']);
  }
}
