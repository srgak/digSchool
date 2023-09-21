import { AfterViewInit, ChangeDetectionStrategy, Component, ComponentRef, EventEmitter, Input, OnDestroy, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { BodyScroll } from 'src/app/helpers/body-scroll';
import { ModalData } from 'src/app/helpers/interfaces/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent extends BodyScroll implements AfterViewInit, OnDestroy {
  @ViewChild('outer', {read: ViewContainerRef}) private vcr!: ViewContainerRef;
  @Input() public componentData?: ModalData;
  @Output() public onClose: EventEmitter<void> = new EventEmitter();
  private currentComponent!: ComponentRef<any>;

  public close(): void {
    this.vcr.clear();
    this.onClose.emit();
  }

  ngAfterViewInit(): void {
    this.vcr.clear();
    if(this.componentData) {
      this.currentComponent = this.vcr.createComponent(this.componentData.component);
      this.currentComponent.instance.data = this.componentData.data;
      this.lockScroll();
    }
  }
  ngOnDestroy(): void {
    this.unlockScroll();
  }
}
