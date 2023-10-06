import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { UserData } from 'src/app/helpers/interfaces/user';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableUsersComponent {
  @Input() public data!: UserData[];
  @Output() public onSelect: EventEmitter<UserData> = new EventEmitter();
  public columnList: string[] = [
    'id',
    'fio',
    'role'
  ];
}
