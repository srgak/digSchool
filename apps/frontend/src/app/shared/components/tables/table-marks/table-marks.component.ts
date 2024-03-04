import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TableMain } from '../../../../helpers/interfaces/table';
import { MarkInfo } from 'libs/api-interfaces/src';

@Component({
  selector: 'app-table-marks',
  templateUrl: './table-marks.component.html',
  styleUrls: ['./table-marks.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableMarksComponent implements TableMain {
  @Input() public data!: MarkInfo[];
  @Output() public readonly onSelect: EventEmitter<MarkInfo> = new EventEmitter();
  public columnList: string[] = ['date', 'value', 'type', 'description'];
}
