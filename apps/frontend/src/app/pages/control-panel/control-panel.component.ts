import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { pageName } from '../../helpers/routes';
import { BREADCRUMBS_URL } from '../../helpers/tokens/breadcrumbs';
import { GraphqlUsersService } from '../../services/graphQL/users/graphql-users.service';
import { requestBreadcrumbs } from '../../store/actions/breadcrumbs.action';
import { AppState } from '../../store/state/app.state';
import { UserData } from 'libs/api-interfaces/src';

@Component({
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlPanelComponent {
  public userList: Observable<UserData[]> = this.graphQLUsers.getUserList();
  constructor(
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
    this.router.navigate([`${pageName.ControlPanel}/${pageName.ControlPanelEdit}`, user.id]);
  }
}
