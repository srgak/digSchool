import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-error',
  templateUrl: './modal-error.component.html',
  styleUrls: ['./modal-error.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalErrorComponent {
  @Input() public data!: string;
}
