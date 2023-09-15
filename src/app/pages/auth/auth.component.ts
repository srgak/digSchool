import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  public sendForm() {
    if(this.form.valid) {
      //todo отправить данные на проверку
    } else {
      //вывести ошибки
      this.form.markAllAsTouched();
    }
  }

  public showModalAuth() {
    //todo показать модалку с информацией 
  }
}
