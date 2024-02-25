import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BreadcrumbItem } from '../../../helpers/interfaces/breadcrumbs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbsComponent {
  @Input() public list!: BreadcrumbItem[];
}
