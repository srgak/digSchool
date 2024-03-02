import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MenuData } from '../../../helpers/interfaces/menu';
import { menuSelector } from '../../../store/selectors/menu.selector';
import { UserRoleService } from '../../../services/storage/user-role/user-role.service';
import { AppState } from '../../../store/state/app.state';
import { requestMenu } from '../../../store/actions/menu.action';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  public isOpen = false;
  public menuList$: Observable<MenuData | null> = this.store.select(menuSelector);

  constructor(
    private readonly userRole: UserRoleService,
    private readonly store: Store<AppState>,
  ) {
    this.store.dispatch(
      requestMenu({
        role: this.userRole.prop,
      }),
    );
  }

  public toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }
}
