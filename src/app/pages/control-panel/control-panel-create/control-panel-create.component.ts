import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BreadcrumbItem } from 'src/app/helpers/interfaces/breadcrumbs';
import { UserData } from 'src/app/helpers/interfaces/user';
import { breadcrumbsProvide } from 'src/app/helpers/providers/breadcrumbs/breadcrumbs';
import { pageBreadcrumbs, pageName } from 'src/app/helpers/routes';
import { BREADCRUMBS } from 'src/app/helpers/tokens/breadcrumbs';
import { BreadcrumbsService } from 'src/app/services/breadcrumbs/breadcrumbs.service';
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
  ],
  providers: [
    breadcrumbsProvide(pageBreadcrumbs.controlPanelCreate)
  ]
})
export class ControlPanelCreateComponent {
  constructor(
    private httpAuth: HttpAuthService,
    private router: Router,
    @Inject(BREADCRUMBS) private breadcrumbs: Observable<BreadcrumbItem[]>,
    private breadcrumbsData: BreadcrumbsService
  ) {
    this.breadcrumbsData.current = this.breadcrumbs;
  }
  public createUser(data: UserData): void {
    this.httpAuth.register(data)
      .subscribe(data => {
        this.router.navigateByUrl(pageName.ControlPanel);
      });
  }
}
