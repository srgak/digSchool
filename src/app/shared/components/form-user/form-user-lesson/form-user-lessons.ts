import { inject } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { FormMain } from "src/app/helpers/interfaces/form";
import { ValidatorsService } from "src/app/services/validators/validators.service";

export class FormUserLesson implements FormMain {
  private validators = inject(ValidatorsService);
  public form: FormGroup = new FormGroup({
    name: new FormControl(null, [this.validators.validateRequired]),
    teacher: new FormControl(null, [this.validators.validateRequired])
  });

  public get name(): FormControl {
    return this.form.get('name') as FormControl;
  }
  public get teacher(): FormControl {
    return this.form.get('teacher') as FormControl;
  }
}