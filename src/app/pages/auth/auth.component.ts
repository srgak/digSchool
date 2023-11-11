import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormMain, FormSubmit } from 'src/app/helpers/interfaces/form';
import { UserAuthResponse } from 'src/app/helpers/interfaces/user';
import { pageName } from 'src/app/helpers/routes';
import { ModalService } from 'src/app/services/modal/modal.service';
import { AccessTokenService } from 'src/app/services/storage/access-token/access-token.service';
import { AuthForm } from './auth-form';
import { HttpAuthService } from 'src/app/services/http/auth/http-auth.service';
import { SYMBOLS_RU_TO_EN } from 'src/app/helpers/tokens/symbols-translate';
import { SimpleObject } from 'src/app/helpers/interfaces/common';
import { UserDataService } from 'src/app/services/storage/user-data/user-data.service';
import { Observable } from 'rxjs';
import { BreadcrumbItem } from 'src/app/helpers/interfaces/breadcrumbs';
import { BREADCRUMBS } from 'src/app/helpers/tokens/breadcrumbs';
import { BreadcrumbsService } from 'src/app/services/breadcrumbs/breadcrumbs.service';

@Component({
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent extends AuthForm implements FormMain, FormSubmit {
  constructor(
    private router: Router,
    public modal: ModalService,
    private httpAuth: HttpAuthService,
    private accessToken: AccessTokenService,
    private userData: UserDataService,
    @Inject(SYMBOLS_RU_TO_EN) public lettersEnToRu: SimpleObject<string>,
    @Inject(BREADCRUMBS) private breadcrumbs: Observable<BreadcrumbItem[]>,
    private breadcrumbsData: BreadcrumbsService
  ) {
    super();
    this.breadcrumbsData.current = this.breadcrumbs;
  }

  public onSubmit() {
    if(this.form.valid) {
      this.httpAuth.login(this.form.value)
        .subscribe(this.onSuccess);
    } else {
      this.form.markAllAsTouched();
    }
  }

  private onSuccess = (data: UserAuthResponse): void => {
    this.userData.prop = data.user;
    this.accessToken.prop = data.accessToken;
    this.router.navigateByUrl(pageName.Main);
  }
}
