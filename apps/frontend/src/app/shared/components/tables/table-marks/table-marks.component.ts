import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MarkValue } from '../../../../helpers/interfaces/marks';
import { TableMain } from '../../../../helpers/interfaces/table';

@Component({
  selector: 'app-table-marks',
  templateUrl: './table-marks.component.html',
  styleUrls: ['./table-marks.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableMarksComponent implements TableMain {
  @Input() public data!: MarkValue[];
  @Output() public readonly onSelect: EventEmitter<MarkValue> = new EventEmitter();
  public columnList: string[] = ['date', 'value', 'type', 'description'];
}
