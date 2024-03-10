import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { routeName } from '../../helpers/routes';
import { GraphqlUsersService } from '../../services/graphQL/users/graphql-users.service';
import { requestBreadcrumbs } from '../../store/actions/breadcrumbs.action';
import { AppState } from '../../store/state/app.state';
import { UserData } from 'libs/api-interfaces/src';
import { PAGE_NAME } from '../../helpers/tokens/page-name.token';

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
    this.router.navigate([`${routeName.ControlPanel}/${routeName.ControlPanelEdit}`, user.id]);
  }
}
