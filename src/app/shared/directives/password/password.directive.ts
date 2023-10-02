import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[showPassword]'
})
export class PasswordDirective implements OnInit {
  private el: Element = this.elRef.nativeElement;
  private isVisible: boolean = false;

  constructor(
    private elRef: ElementRef,
    private r2: Renderer2
  ) {
    r2.setAttribute(this.el, 'type', 'password');
  }

  ngOnInit(): void {
    const button = this.r2.createElement('button');
    this.r2.addClass(button, 'form__password');
    this.r2.setAttribute(button, 'type', 'button');
    this.r2.appendChild(
      this.r2.parentNode(this.el),
      button
    )
    this.r2.listen(button, 'click', this.onClick);
  }

  private onClick = (event: PointerEvent) => {
    const button = event.target as HTMLButtonElement;
    this.isVisible = !this.isVisible;
    if(this.isVisible) {
      this.r2.setAttribute(this.el, 'type', 'text');
      this.r2.addClass(button, 'active');
    } else {
      this.r2.setAttribute(this.el, 'type', 'password');
      this.r2.removeClass(button, 'active');
    }
  }
}
