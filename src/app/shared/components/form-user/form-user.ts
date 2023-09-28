import { inject } from "@angular/core";
import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { FormMain } from "src/app/helpers/interfaces/form";
import { ValidatorsService } from "src/app/services/validators/validators.service";

export class FormUser implements FormMain {
  private validators = inject(ValidatorsService);
  public form: FormGroup = new FormGroup({
    email: new FormControl(null, [this.validators.validateRequired, this.validators.validateEmail]),
    password: new FormControl(null, [this.validators.validateRequired]),
    id: new FormControl(null),
    firstName: new FormControl(null, [this.validators.validateRequired]),
    lastName: new FormControl(null, [this.validators.validateRequired]),
    patronymic: new FormControl(null, [this.validators.validateRequired]),
    role: new FormControl(null, [this.validators.validateRequired]),
    class: new FormControl(null, [this.validators.validateRequired]),
    lessons: new FormArray([
      new FormControl(null, [this.validators.validateRequired])
    ])
  });

  public get email(): FormControl {
    return this.form.get('email') as FormControl;
  }
  public get password(): FormControl {
    return this.form.get('password') as FormControl;
  }
  public get firstName(): FormControl {
    return this.form.get('firstName') as FormControl;
  }
  public get lastName(): FormControl {
    return this.form.get('lastName') as FormControl;
  }
  public get patronymic(): FormControl {
    return this.form.get('patronymic') as FormControl;
  }
  public get role(): FormControl {
    return this.form.get('role') as FormControl;
  }
  public get class(): FormControl {
    return this.form.get('class') as FormControl;
  }
  public get lessons(): FormArray {
    return this.form.get('lessons') as FormArray;
  }
}