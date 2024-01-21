import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserData } from 'src/app/helpers/interfaces/user';
import { breadcrumbsProvide } from 'src/app/helpers/providers/breadcrumbs/breadcrumbs';
import { pageBreadcrumbs, pageName } from 'src/app/helpers/routes';
import { BREADCRUMBS_URL } from 'src/app/helpers/tokens/breadcrumbs';
import { GraphqlUsersService } from 'src/app/services/graphQL/users/graphql-users.service';
import { FormUserModule } from 'src/app/shared/components/forms/form-user/form-user.module';
import { requestBreadcrumbs } from 'src/app/store/actions/breadcrumbs.action';
import { AppState } from 'src/app/store/state/app.state';

@Component({
  templateUrl: './control-panel-create.component.html',
  styleUrls: ['./control-panel-create.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    FormUserModule,
    MatButtonModule
  ],
  providers: [
    breadcrumbsProvide(pageBreadcrumbs.controlPanelCreate)
  ]
})
export class ControlPanelCreateComponent {
  constructor(
    private graphQLUsers: GraphqlUsersService,
    private router: Router,
    @Inject(BREADCRUMBS_URL) private breadcrumbsUrl: string,
    private store: Store<AppState>
  ) {
    this.store.dispatch(requestBreadcrumbs({
      url: this.breadcrumbsUrl
    }));
  }
  public createUser(data: UserData): void {
    this.graphQLUsers.createUserData(data)
      .subscribe(() => {
        this.router.navigateByUrl(pageName.ControlPanel);
      });
  }
}
