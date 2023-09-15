import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, throwError } from 'rxjs';
import { AuthService } from 'src/app/services/bd/auth/auth.service';
import { UserResponse } from 'src/app/services/bd/types';

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
    private authService: AuthService
  ) {}

  public sendForm() {
    if(this.form.valid) {
      this.authService.DBChecker.checkItem(this.form.value)
        .pipe(
          catchError((error: UserResponse) => {
            return throwError(() => error);
          })
        )
        .subscribe(response => {
          //todo перейти на основную страницу
        });
    } else {
      this.form.markAllAsTouched();
    }
  }

  public showModalAuth() {
    //todo показать модалку с информацией 
  }
}
