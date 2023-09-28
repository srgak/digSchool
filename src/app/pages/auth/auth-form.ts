import { inject } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { FormMain } from "src/app/helpers/interfaces/form";
import { ValidatorsService } from "src/app/services/validators/validators.service";

export class AuthForm implements FormMain {
  private validators = inject(ValidatorsService);
  public form: FormGroup = new FormGroup({
    email: new FormControl(null, [this.validators.validateRequired, this.validators.validateEmail]),
    password: new FormControl(null, [this.validators.validateRequired])
  });

  public get email(): FormControl {
    return this.form.get('email') as FormControl;
  }
  public get password(): FormControl {
    return this.form.get('password') as FormControl;
  }
}