import { ElementRef, inject, Renderer2 } from '@angular/core';
import { MenuItem } from 'libs/api-interfaces/src';

export abstract class MenuButton {
  abstract data: MenuItem;
  private readonly elRef: ElementRef = inject(ElementRef);
  public r2: Renderer2 = inject(Renderer2);
  public el: Element;
  constructor() {
    this.el = this.elRef.nativeElement;
    this.r2.addClass(this.el, 'menu-list__link');
  }
  public createImg(): void {
    const img = this.r2.createElement('img');

    this.r2.setAttribute(img, 'src', this.data.img);
    this.r2.setAttribute(img, 'alt', this.data.name);
    this.r2.appendChild(this.el, img);
  }
}
