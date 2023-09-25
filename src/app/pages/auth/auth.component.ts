import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { ResponseDB } from 'src/app/helpers/interfaces/db';
import { UserAuthResponse } from 'src/app/helpers/interfaces/user';
import { pageName } from 'src/app/helpers/routes';
import { UsersService } from 'src/app/services/db/users/users.service';
import { HttpService } from 'src/app/services/http/http.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { AccessTokenService } from 'src/app/services/storage/access-token/access-token.service';
import { AuthFlagService } from 'src/app/services/storage/auth-flag/auth-flag.service';
import { UserIdService } from 'src/app/services/storage/user-id/user-id.service';

@Component({
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent {
  public form: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  });

  constructor(
    private router: Router,
    private userId: UserIdService,
    public modal: ModalService,
    private http: HttpService,
    private accessToken: AccessTokenService,
    private user: UsersService
  ) {}

  public sendForm() {
    if(this.form.valid) {
      // this.authData.DBChecker.checkItem(this.form.value)
      //   .pipe(
      //     catchError((error: ResponseDB) => {
      //       this.form.setErrors({incorrect: true});
      //       return throwError(() => error);
      //     })
      //   )
      //   .subscribe(data => {
      //     this.saveData(data);
      //     this.router.navigateByUrl(pageName.Main);
      //   });
      this.http.login(this.form.value)
        .pipe(
          catchError(error => {
            return throwError(() => error);
          })
        )
        .subscribe(this.loginSuccess);
    } else {
      this.form.markAllAsTouched();
    }
  }

  private loginSuccess = (data: UserAuthResponse): void => {
    this.accessToken.prop = data.accessToken;
    // this.user.currentUser = data.user;
    this.userId.prop = data.user.id;
    this.router.navigateByUrl(pageName.Main);
  }

  public showModalAuth() {
    //todo показать модалку с информацией 
  }

  // private saveData(data: UserAuthResponse): void {
  //   this.authFlag.prop = true;
  //   this.userId.prop = data.id;
  // }
}
