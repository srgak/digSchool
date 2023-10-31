import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TableMain } from 'src/app/helpers/interfaces/table';
import { UserData } from 'src/app/helpers/interfaces/user';

@Component({
  selector: 'app-table-pupils',
  templateUrl: './table-pupils.component.html',
  styleUrls: ['./table-pupils.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TablePupilsComponent implements TableMain {
  @Input() public data!: UserData[];
  @Output() public onSelect: EventEmitter<UserData> = new EventEmitter();
  public columnList: string[] = [
    'fio',
    'class'
  ];
}
