import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormMain, FormSubmit } from 'src/app/helpers/interfaces/form';
import { UserAuthResponse } from 'src/app/helpers/interfaces/user';
import { pageName } from 'src/app/helpers/routes';
import { HttpService } from 'src/app/services/http/http.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { AccessTokenService } from 'src/app/services/storage/access-token/access-token.service';
import { UserIdService } from 'src/app/services/storage/user-id/user-id.service';
import { UserRoleService } from 'src/app/services/storage/user-role/user-role.service';
import { AuthForm } from './auth-form';

@Component({
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent extends AuthForm implements FormMain, FormSubmit {
  constructor(
    private router: Router,
    private userId: UserIdService,
    public modal: ModalService,
    private http: HttpService,
    private accessToken: AccessTokenService,
    private userRole: UserRoleService
  ) {
    super();
  }

  public onSubmit() {
    if(this.form.valid) {
      this.http.login(this.form.value)
        .subscribe(this.onSuccess);
    } else {
      this.form.markAllAsTouched();
    }
  }

  private onSuccess = (data: UserAuthResponse): void => {
    this.userRole.prop = data.user.role;
    this.accessToken.prop = data.accessToken;
    this.userId.prop = data.user.id;
    this.router.navigateByUrl(pageName.Main);
  }
}
