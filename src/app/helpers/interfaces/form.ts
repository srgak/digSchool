import { FormGroup } from "@angular/forms";

export abstract class Form {
  abstract form: FormGroup;
  abstract onSubmit(): void;
}