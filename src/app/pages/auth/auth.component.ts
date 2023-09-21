import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { ResponseDB } from 'src/app/helpers/interfaces/db';
import { UserAuthResponse } from 'src/app/helpers/interfaces/user';
import { pageName } from 'src/app/helpers/routes';
import { AuthService } from 'src/app/services/db/auth/auth.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { AuthFlagService } from 'src/app/services/storage/auth-flag/auth-flag.service';
import { UserIdService } from 'src/app/services/storage/user-id/user-id.service';

@Component({
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent {
  public form: FormGroup = new FormGroup({
    login: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  });

  constructor(
    private authData: AuthService,
    private router: Router,
    private authFlag: AuthFlagService,
    private userId: UserIdService,
    public modal: ModalService
  ) {}

  public sendForm() {
    if(this.form.valid) {
      this.authData.DBChecker.checkItem(this.form.value)
        .pipe(
          catchError((error: ResponseDB) => {
            this.form.setErrors({incorrect: true});
            return throwError(() => error);
          })
        )
        .subscribe(data => {
          this.saveData(data);
          this.router.navigateByUrl(pageName.Main);
        });
    } else {
      this.form.markAllAsTouched();
    }
  }

  public showModalAuth() {
    //todo показать модалку с информацией 
  }

  private saveData(data: UserAuthResponse): void {
    this.authFlag.prop = true;
    this.userId.prop = data.id;
  }
}
