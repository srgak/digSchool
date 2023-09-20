import { Directive, ElementRef, HostListener, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[uiTooltip]'
})
export class TooltipDirective implements OnInit, OnDestroy {
  @Input('uiTooltip') public tooltip!: string;
  @HostListener('mouseover') private onMouseIn(): void {
    const tooltipPosition = this.element.getBoundingClientRect();
    this.r2.appendChild(document.body, this.tooltipBlock);
    this.r2.setStyle(this.tooltipBlock, 'top', `${tooltipPosition.top - tooltipPosition.height - 10}px`);
    this.r2.setStyle(this.tooltipBlock, 'left', `${tooltipPosition.left + (tooltipPosition.width / 2) - (this.tooltipBlock.clientWidth / 2)}px`);
  }
  @HostListener('mouseleave') private onMouseLeave(): void {
    this.tooltipBlock.remove();
  }
  private element: Element = this.elRef.nativeElement;
  private tooltipBlock: Element;
  constructor(
    private elRef: ElementRef,
    private r2: Renderer2
  ) {
    this.tooltipBlock = r2.createElement('div');
    r2.addClass(this.tooltipBlock, 'tooltip');
  }
  ngOnInit(): void {
    this.r2.setProperty(this.tooltipBlock, 'innerHTML', this.tooltip);
  }
  ngOnDestroy(): void {
    this.onMouseLeave();
  }
}
