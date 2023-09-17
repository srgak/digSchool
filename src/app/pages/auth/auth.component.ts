import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, throwError } from 'rxjs';
import { pageName } from 'src/app/helpers/routes';
import { AuthService } from 'src/app/services/db/auth/auth.service';
import { UserResponse } from 'src/app/helpers/types';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { AuthFlagService } from 'src/app/services/storage/auth-flag/auth-flag.service';

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
    private authService: AuthService,
    private navigation: NavigationService,
    private authFlag: AuthFlagService
  ) {}

  public sendForm() {
    if(this.form.valid) {
      this.authService.DBChecker.checkItem(this.form.value)
        .pipe(
          catchError((error: UserResponse) => {
            this.form.setErrors({incorrect: true});
            return throwError(() => error);
          })
        )
        .subscribe(() => {
          this.authFlag.isAuth = true;
          this.navigation.goTo(pageName.main);
        });
    } else {
      this.form.markAllAsTouched();
    }
  }

  public showModalAuth() {
    //todo показать модалку с информацией 
  }
}
