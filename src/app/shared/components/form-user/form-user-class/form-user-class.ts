import { inject } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ValidatorsService } from "src/app/services/validators/validators.service";
import { ControlMain } from "src/app/helpers/interfaces/form";

export class FormUserClass implements ControlMain {
  private validators = inject(ValidatorsService);
  public control: FormControl = new FormControl(null, [this.validators.validateRequired]);
}