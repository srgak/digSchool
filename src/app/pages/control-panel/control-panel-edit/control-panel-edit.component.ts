import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BreadcrumbItem } from 'src/app/helpers/interfaces/breadcrumbs';
import { UserData } from 'src/app/helpers/interfaces/user';
import { breadcrumbsProvide } from 'src/app/helpers/providers/breadcrumbs/breadcrumbs';
import { pageBreadcrumbs, pageName } from 'src/app/helpers/routes';
import { BREADCRUMBS } from 'src/app/helpers/tokens/breadcrumbs';
import { BreadcrumbsService } from 'src/app/services/breadcrumbs/breadcrumbs.service';
import { HttpUsersService } from 'src/app/services/http/users/http-users.service';
import { FormUserModule } from 'src/app/shared/components/forms/form-user/form-user.module';

@Component({
  selector: 'app-control-panel-edit',
  templateUrl: './control-panel-edit.component.html',
  styleUrls: ['./control-panel-edit.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    FormUserModule
  ],
  providers: [
    breadcrumbsProvide(pageBreadcrumbs.controlPanelEdit)
  ]
})
export class ControlPanelEditComponent {
  constructor(
    public activatedRoute: ActivatedRoute,
    private router: Router,
    private httpUsers: HttpUsersService,
    @Inject(BREADCRUMBS) private breadcrumbs: Observable<BreadcrumbItem[]>,
    private breadcrumbsData: BreadcrumbsService
  ) {
    this.breadcrumbsData.current = this.breadcrumbs;
  }

  public editUser(user: UserData): void {
    this.httpUsers.editUserData(this.activatedRoute.snapshot.params['id'], user)
      .subscribe(() => {
        this.router.navigateByUrl(pageName.ControlPanel);
      });
  }
  public deleteUser(): void {
    this.httpUsers.deleteUserData(this.activatedRoute.snapshot.params['id'])
      .subscribe(() => {
        this.router.navigateByUrl(pageName.ControlPanel);
      });
  }
}
