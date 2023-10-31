import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { UserData } from 'src/app/helpers/interfaces/user';
import { pageName } from 'src/app/helpers/routes';
import { HttpAuthService } from 'src/app/services/http/auth/http-auth.service';
import { FormUserModule } from 'src/app/shared/components/forms/form-user/form-user.module';

@Component({
  selector: 'app-control-panel-create',
  templateUrl: './control-panel-create.component.html',
  styleUrls: ['./control-panel-create.component.less'],
  standalone: true,
  imports: [
    FormUserModule,
    MatButtonModule
  ]
})
export class ControlPanelCreateComponent {
  constructor(
    private httpAuth: HttpAuthService,
    private router: Router
  ) {}
  public createUser(data: UserData): void {
    this.httpAuth.register(data)
      .subscribe(data => {
        this.router.navigateByUrl(pageName.ControlPanel);
      });
  }
}
