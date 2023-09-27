import { AfterContentInit, ChangeDetectionStrategy, Component, ContentChild } from '@angular/core';
import { FormArray, FormArrayName, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormListComponent implements AfterContentInit {
  @ContentChild(FormArrayName) private arrayName!: FormArrayName;
  public array!: FormArray;

  public remove(): void {
    this.array.removeAt(this.array['controls'].length - 1);
  }

  public add(): void {
    this.array.push(new FormControl(null));
  }

  ngAfterContentInit(): void {
    this.array = this.arrayName.control;
  }
}
