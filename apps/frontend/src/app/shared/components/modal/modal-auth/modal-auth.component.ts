import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-modal-auth',
  templateUrl: './modal-auth.component.html',
  styleUrls: ['./modal-auth.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalAuthComponent {}
