import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalService } from './services/modal/modal.service';
import { AccessTokenService } from './services/storage/access-token/access-token.service';
import { Store } from '@ngrx/store';
import { breadcrumbsSelector } from './store/selectors/breadcrumbs.selector';
import { AppState } from './store/state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public breadcrumbs$ = this.store.select(breadcrumbsSelector);

  constructor(
    public accessToken: AccessTokenService,
    public modal: ModalService,
    private readonly store: Store<AppState>,
  ) {}
}
