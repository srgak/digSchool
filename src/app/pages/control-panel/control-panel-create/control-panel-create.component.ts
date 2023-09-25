import { Component } from '@angular/core';
import { UserData } from 'src/app/helpers/interfaces/user';
import { FormUserModule } from 'src/app/shared/components/form-user/form-user.module';

@Component({
  selector: 'app-control-panel-create',
  templateUrl: './control-panel-create.component.html',
  styleUrls: ['./control-panel-create.component.less'],
  standalone: true,
  imports: [
    FormUserModule
  ]
})
export class ControlPanelCreateComponent {
  public createUser(data: UserData): void {

  }
}
