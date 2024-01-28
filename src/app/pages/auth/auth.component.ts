import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormMain, FormSubmit } from 'src/app/helpers/interfaces/form';
import { UserAuthResponse } from 'src/app/helpers/interfaces/user';
import { pageName } from 'src/app/helpers/routes';
import { ModalService } from 'src/app/services/modal/modal.service';
import { AccessTokenService } from 'src/app/services/storage/access-token/access-token.service';
import { AuthForm } from './auth-form';
import { SYMBOLS_RU_TO_EN } from 'src/app/helpers/tokens/symbols-translate';
import { BREADCRUMBS_URL } from 'src/app/helpers/tokens/breadcrumbs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { requestBreadcrumbs } from 'src/app/store/actions/breadcrumbs.action';
import { UserIdService } from 'src/app/services/storage/user-id/user-id.service';
import { GraphqlAuthService } from 'src/app/services/graphQL/auth/graphql-auth.service';

@Component({
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent extends AuthForm implements FormMain, FormSubmit {
  constructor(
    private router: Router,
    public modal: ModalService,
    private graphQLAuth: GraphqlAuthService,
    private accessToken: AccessTokenService,
    private userId: UserIdService,
    @Inject(SYMBOLS_RU_TO_EN) public lettersEnToRu: Record<string, string>,
    @Inject(BREADCRUMBS_URL) private breadcrumbsUrl: string,
    private store: Store<AppState>
  ) {
    super();
    this.store.dispatch(requestBreadcrumbs({
      url: this.breadcrumbsUrl
    }));
  }

  public onSubmit() {
    if(this.form.valid) {
      this.graphQLAuth.login(this.form.value)
        .subscribe(this.onSuccess);
    } else {
      this.form.markAllAsTouched();
    }
  }

  private onSuccess = (data: UserAuthResponse): void => {
    this.userId.prop = data.id;
    this.accessToken.prop = data.accessToken;
    this.router.navigateByUrl(pageName.Main);
  }
}
