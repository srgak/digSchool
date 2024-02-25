import { inject } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ValidatorsService } from "../../../../../services/validators/validators.service";
import { ControlMain } from "../../../../../helpers/interfaces/form";

export class FormUserClass implements ControlMain {
  private validators = inject(ValidatorsService);
  public control: FormControl = new FormControl(null, [this.validators.validateRequired]);
}