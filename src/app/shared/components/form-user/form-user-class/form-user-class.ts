import { inject } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { FormMain } from "src/app/helpers/interfaces/form";
import { ValidatorsService } from "src/app/services/validators/validators.service";

export class FormUserClass implements FormMain {
  private validators = inject(ValidatorsService);
  public form: FormGroup = new FormGroup({
    number: new FormControl(null, [this.validators.validateRequired]),
    letter: new FormControl(null, [this.validators.validateRequired])
  });

  public get number(): FormControl {
    return this.form.get('number') as FormControl;
  }
  public get letter(): FormControl {
    return this.form.get('letter') as FormControl;
  }
}