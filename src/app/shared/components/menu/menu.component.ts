import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuData } from 'src/app/helpers/interfaces/menu';
import { SETTINGS_MENU_TOKEN } from 'src/app/helpers/tokens/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {
  public isOpen: boolean = false;
  constructor(
    @Inject(SETTINGS_MENU_TOKEN) public settings: Observable<MenuData>
  ) {}
  public toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }
}
