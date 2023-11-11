import { Component, Inject } from '@angular/core';
import { ModalService } from './services/modal/modal.service';
import { AccessTokenService } from './services/storage/access-token/access-token.service';
import { BREADCRUMBS } from './helpers/tokens/breadcrumbs';
import { Observable } from 'rxjs';
import { BreadcrumbItem } from './helpers/interfaces/breadcrumbs';
import { Router } from '@angular/router';
import { BreadcrumbsService } from './services/breadcrumbs/breadcrumbs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(
    public accessToken: AccessTokenService,
    public modal: ModalService,
    private router: Router,
    public breadcrumbsData: BreadcrumbsService
    // @Inject(BREADCRUMBS) public breadcrumbs: Observable<BreadcrumbItem[]>
  ) {
    // this.router.events.subscribe(console.log);
  }
}
