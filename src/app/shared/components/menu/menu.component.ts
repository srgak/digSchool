import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MenuData } from 'src/app/helpers/interfaces/menu';
import { UserRoleService } from 'src/app/services/storage/user-role/user-role.service';
import { requestMenu } from 'src/app/store/actions/menu.action';
import { menuSelector } from 'src/app/store/selectors/menu.selector';
import { AppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {
  public isOpen: boolean = false;
  public menuList$: Observable<MenuData | null> = this.store.select(menuSelector);

  constructor(
    private userRole: UserRoleService,
    private store: Store<AppState>
  ) {
    this.store.dispatch(requestMenu({
      role: this.userRole.prop
    }));
  }

  public toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }
}
