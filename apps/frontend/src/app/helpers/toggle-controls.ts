import { FormGroup } from "@angular/forms";

interface Data {
  [key: string]: string[]
}

export class ToggleControls {
  private form: FormGroup;
  private data: Data;

  constructor(form: FormGroup, data: Data) {
    this.form = form;
    this.data = data;
  }

  public toggle(value: string): void {
    Object.keys(this.data).forEach(item => {
      this.data[item].forEach(control => {
        if(value !== item) {
          this.form.get(control)?.disable();
          this.form.get(control)?.markAsUntouched();
        } else {
          this.form.get(control)?.enable();
        }
      });
    });
  }
}