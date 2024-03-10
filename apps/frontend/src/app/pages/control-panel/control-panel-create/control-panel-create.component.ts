import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
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
  templateUrl: './control-panel-create.component.html',
  styleUrls: ['./control-panel-create.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [FormUserModule, MatButtonModule],
  providers: [pageNameProvide(pageName.ControlPanelCreate)],
})
export class ControlPanelCreateComponent {
  constructor(
    private readonly graphQLUsers: GraphqlUsersService,
    private readonly router: Router,
    @Inject(PAGE_NAME) private readonly page: string,
    private readonly store: Store<AppState>,
  ) {
    this.store.dispatch(
      requestBreadcrumbs({
        pageName: this.page,
      }),
    );
  }
  public createUser(data: UserData): void {
    this.graphQLUsers.createUserData(data).subscribe(() => {
      this.router.navigateByUrl(routeName.ControlPanel);
    });
  }
}
