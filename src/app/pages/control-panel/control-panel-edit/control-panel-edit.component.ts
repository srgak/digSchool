import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { forkJoin } from 'rxjs';
import { UserData } from 'src/app/helpers/interfaces/user';
import { breadcrumbsProvide } from 'src/app/helpers/providers/breadcrumbs/breadcrumbs';
import { pageBreadcrumbs, pageName } from 'src/app/helpers/routes';
import { BREADCRUMBS_URL } from 'src/app/helpers/tokens/breadcrumbs';
import { GraphqlUsersService } from 'src/app/services/graphQL/users/graphql-users.service';
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
    private graphQLUsers: GraphqlUsersService,
    @Inject(BREADCRUMBS_URL) private breadcrumbsUrl: string,
    private store: Store<AppState>
  ) {
    this.store.dispatch(requestBreadcrumbs({
      url: this.breadcrumbsUrl
    }));
  }

  public editUser(user: UserData): void {
    const userId = this.activatedRoute.snapshot.params['id'];

    forkJoin([
      this.httpUsers.editUserData({
        id: userId,
        email: user.email,
        password: user.password
      }),
      this.graphQLUsers.editUserData({...user, id: userId})
    ])
      .subscribe(() => {
        this.router.navigateByUrl(pageName.ControlPanel);
      });
  }
  public deleteUser(): void {
    const userId = this.activatedRoute.snapshot.params['id'];

    forkJoin([
      this.httpUsers.deleteUserData(userId),
      this.graphQLUsers.deleteUserData(userId)
    ])
      .subscribe(() => {
        this.router.navigateByUrl(pageName.ControlPanel);
      });
  }
}
