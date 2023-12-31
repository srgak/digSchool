import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MarkValue } from 'src/app/helpers/interfaces/marks';
import { TableMain } from 'src/app/helpers/interfaces/table';

@Component({
  selector: 'app-table-marks',
  templateUrl: './table-marks.component.html',
  styleUrls: ['./table-marks.component.less']
})
export class TableMarksComponent implements TableMain {
  @Input() public data!: MarkValue[];
  @Output() public onSelect: EventEmitter<MarkValue> = new EventEmitter();
  public columnList: string[] = [
    'date',
    'value',
    'type',
    'description'
  ];
}
