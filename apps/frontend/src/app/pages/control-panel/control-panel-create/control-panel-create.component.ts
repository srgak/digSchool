import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
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
  templateUrl: './control-panel-create.component.html',
  styleUrls: ['./control-panel-create.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [FormUserModule, MatButtonModule],
  providers: [breadcrumbsProvide(pageBreadcrumbs.controlPanelCreate)],
})
export class ControlPanelCreateComponent {
  constructor(
    private readonly graphQLUsers: GraphqlUsersService,
    private readonly router: Router,
    @Inject(BREADCRUMBS_URL) private readonly breadcrumbsUrl: string,
    private readonly store: Store<AppState>,
  ) {
    this.store.dispatch(
      requestBreadcrumbs({
        url: this.breadcrumbsUrl,
      }),
    );
  }
  public createUser(data: UserData): void {
    this.graphQLUsers.createUserData(data).subscribe(() => {
      this.router.navigateByUrl(pageName.ControlPanel);
    });
  }
}
