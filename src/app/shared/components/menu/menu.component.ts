import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, map } from 'rxjs';
import { MenuData, MenuSettings } from 'src/app/helpers/interfaces/menu';
import { SETTINGS_MENU_TOKEN } from 'src/app/helpers/tokens';
import { UserRoleService } from 'src/app/services/storage/user-role/user-role.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit, OnDestroy {
  public isOpen: boolean = false;
  public menuList!: MenuData;
  private subs: Subscription = new Subscription();
  constructor(
    @Inject(SETTINGS_MENU_TOKEN) public settings: Observable<MenuSettings>,
    private userRole: UserRoleService
  ) {}
  public toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }
  ngOnInit(): void {
    this.subs.add(
      this.settings.pipe(
        map(list => list[this.userRole.prop])
      )
      .subscribe(value => {
        this.menuList = value;
      })
    );
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
