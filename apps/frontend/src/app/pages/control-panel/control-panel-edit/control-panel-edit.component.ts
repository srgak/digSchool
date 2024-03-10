import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { pageName, routeName } from '../../../helpers/routes';
import { GraphqlUsersService } from '../../../services/graphQL/users/graphql-users.service';
import { FormUserModule } from '../../../shared/components/forms/form-user/form-user.module';
import { requestBreadcrumbs } from '../../../store/actions/breadcrumbs.action';
import { AppState } from '../../../store/state/app.state';
import { UserData } from 'libs/api-interfaces/src';
import { pageNameProvide } from '../../../helpers/providers/page-name';
import { PAGE_NAME } from '../../../helpers/tokens/page-name.token';

@Component({
  templateUrl: './control-panel-edit.component.html',
  styleUrls: ['./control-panel-edit.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, FormUserModule],
  providers: [pageNameProvide(pageName.ControlPanelEdit)],
})
export class ControlPanelEditComponent {
  constructor(
    public activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly graphQLUsers: GraphqlUsersService,
    @Inject(PAGE_NAME) private readonly page: string,
    private readonly store: Store<AppState>,
  ) {
    this.store.dispatch(
      requestBreadcrumbs({
        pageName: this.page,
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
        this.router.navigateByUrl(routeName.ControlPanel);
      });
  }

  public deleteUser(): void {
    const userId = this.activatedRoute.snapshot.params['id'];

    this.graphQLUsers.deleteUserData(userId).subscribe(() => {
      this.router.navigateByUrl(routeName.ControlPanel);
    });
  }
}
