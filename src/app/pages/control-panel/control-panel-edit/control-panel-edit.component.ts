import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-control-panel-edit',
  templateUrl: './control-panel-edit.component.html',
  styleUrls: ['./control-panel-edit.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlPanelEditComponent {
  constructor(
    public activatedRoute: ActivatedRoute
  ) {}
}
