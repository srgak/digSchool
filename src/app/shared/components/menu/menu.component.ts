import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {
  public isOpen: boolean = true;
  public toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }
}
