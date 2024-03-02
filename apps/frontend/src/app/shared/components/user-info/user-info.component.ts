import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from '../../../helpers/interfaces/user';
import { pipeValObj } from '../../../helpers/pipes/value-object';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserInfoComponent implements OnInit {
  @Input() public data!: Observable<UserData>;

  public firstName$!: Observable<string>;
  public lastName$!: Observable<string>;
  public patronymic$!: Observable<string>;
  public role$!: Observable<string>;

  ngOnInit(): void {
    this.firstName$ = this.data.pipe(pipeValObj('firstName'));
    this.lastName$ = this.data.pipe(pipeValObj('lastName'));
    this.patronymic$ = this.data.pipe(pipeValObj('patronymic'));
    this.role$ = this.data.pipe(pipeValObj('role'));
  }
}
