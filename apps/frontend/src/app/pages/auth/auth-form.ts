import { inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormMain } from '../../helpers/interfaces/form';
import { ValidatorsService } from '../../services/validators/validators.service';

export class AuthForm implements FormMain {
  private readonly validators = inject(ValidatorsService);
  public form: FormGroup = new FormGroup({
    email: new FormControl(null, [this.validators.validateRequired, this.validators.validateEmail]),
    password: new FormControl(null, [this.validators.validateRequired]),
  });

  public get email(): FormControl {
    return this.form.get('email') as FormControl;
  }
  public get password(): FormControl {
    return this.form.get('password') as FormControl;
  }
}
