import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { breadcrumbsProvide } from '../../../helpers/providers/breadcrumbs/breadcrumbs';
import { pageBreadcrumbs, pageName } from '../../../helpers/routes';
import { BREADCRUMBS_URL } from '../../../helpers/tokens/breadcrumbs';
import { GraphqlUsersService } from '../../../services/graphQL/users/graphql-users.service';
import { FormUserModule } from '../../../shared/components/forms/form-user/form-user.module';
import { requestBreadcrumbs } from '../../../store/actions/breadcrumbs.action';
import { AppState } from '../../../store/state/app.state';
import { UserData } from 'libs/api-interfaces/src';

@Component({
  templateUrl: './control-panel-edit.component.html',
  styleUrls: ['./control-panel-edit.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, FormUserModule],
  providers: [breadcrumbsProvide(pageBreadcrumbs.controlPanelEdit)],
})
export class ControlPanelEditComponent {
  constructor(
    public activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly graphQLUsers: GraphqlUsersService,
    @Inject(BREADCRUMBS_URL) private readonly breadcrumbsUrl: string,
    private readonly store: Store<AppState>,
  ) {
    this.store.dispatch(
      requestBreadcrumbs({
        url: this.breadcrumbsUrl,
      }),
    );
  }

  public editUser(user: UserData): void {
    const userId = this.activatedRoute.snapshot.params['id'];

    this.graphQLUsers
      .editUserData({
        ...user,
        id: userId,
      })
      .subscribe(() => {
        this.router.navigateByUrl(pageName.ControlPanel);
      });
  }

  public deleteUser(): void {
    const userId = this.activatedRoute.snapshot.params['id'];

    this.graphQLUsers.deleteUserData(userId).subscribe(() => {
      this.router.navigateByUrl(pageName.ControlPanel);
    });
  }
}
