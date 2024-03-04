import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TableMain } from '../../../../helpers/interfaces/table';
import { UserData } from 'libs/api-interfaces/src';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableUsersComponent implements TableMain {
  @Input() public data!: UserData[];
  @Output() public readonly onSelect: EventEmitter<UserData> = new EventEmitter();
  public columnList: string[] = ['id', 'fio', 'role'];
}
