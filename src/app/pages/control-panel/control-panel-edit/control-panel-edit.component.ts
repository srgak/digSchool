import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserData } from 'src/app/helpers/interfaces/user';
import { breadcrumbsProvide } from 'src/app/helpers/providers/breadcrumbs/breadcrumbs';
import { pageBreadcrumbs, pageName } from 'src/app/helpers/routes';
import { BREADCRUMBS_URL } from 'src/app/helpers/tokens/breadcrumbs';
import { HttpUsersService } from 'src/app/services/http/users/http-users.service';
import { FormUserModule } from 'src/app/shared/components/forms/form-user/form-user.module';
import { requestBreadcrumbs } from 'src/app/store/actions/breadcrumbs.action';
import { AppState } from 'src/app/store/state/app.state';

@Component({
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
    @Inject(BREADCRUMBS_URL) private breadcrumbsUrl: string,
    private store: Store<AppState>
  ) {
    this.store.dispatch(requestBreadcrumbs({
      url: this.breadcrumbsUrl
    }));
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
