export class BodyScroll {
  private readonly body: HTMLElement = document.querySelector('body') as HTMLElement;

  public lockScroll(): void {
    this.body.style.overflow = 'hidden';
  }
  public unlockScroll(): void {
    this.body.style.overflow = '';
  }
}
