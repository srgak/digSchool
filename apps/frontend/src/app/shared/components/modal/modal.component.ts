import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { BodyScroll } from '../../../helpers/body-scroll';
import { ModalData } from '../../../helpers/interfaces/modal';
import { AdComponent } from '../../../helpers/interfaces/ad-components';
import { toggleModal } from './modal.animation';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [toggleModal],
})
export class ModalComponent extends BodyScroll implements AfterViewInit, OnDestroy {
  @ViewChild('dynamic', { read: ViewContainerRef }) private readonly viewRef!: ViewContainerRef;
  @Input() public componentData?: ModalData;
  @Output() public readonly onClose: EventEmitter<void> = new EventEmitter();

  public animationState = 'hide';

  constructor(private readonly cdr: ChangeDetectorRef) {
    super();
  }
  public close(): void {
    this.viewRef.clear();
    this.onClose.emit();
  }

  ngAfterViewInit(): void {
    this.viewRef.clear();

    if (this.componentData) {
      const component = this.viewRef.createComponent<AdComponent>(this.componentData.component);

      component.instance.data = this.componentData.data;
      this.lockScroll();
      this.animationState = 'show';
      this.cdr.detectChanges();
    }
  }
  ngOnDestroy(): void {
    this.unlockScroll();
  }
}
