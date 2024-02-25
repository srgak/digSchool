import { Directive, HostListener, Input, OnInit } from '@angular/core';
import { AbstractControl, NgControl } from '@angular/forms';

@Directive({
  selector: '[inputTransliteration]'
})
export class TransliterationDirective implements OnInit {
  @Input('inputTransliteration') public lettersData!: Record<string, string>;
  @HostListener('input', ['$event']) private translate(event: InputEvent): void {
    const char = event.data || '';
    const value = this.control?.value;
    this.control?.setValue(char ? value.slice(0, value.length - 1) + this.getResultChar(char) : value);
  }
  @HostListener('paste', ['$event']) private onPaste(event: ClipboardEvent): void {
    const value = event.clipboardData?.getData('text');
    let result = '';

    if(value) {
      for(let i = 0; i < value.length; i++) {
        result += this.getResultChar(value[i]);
      }
    }
    setTimeout(() => {
      this.control?.setValue(result);
    });
  }

  private control!: AbstractControl | null;

  constructor(
    private ngControl: NgControl
  ) { }

  private getResultChar(char: string): string {
    const isUpperCase = char.toUpperCase() === char;
    char = isUpperCase ? char.toLowerCase() : char;
    const result = this.lettersData[char] || char;
    return isUpperCase ? result.toUpperCase() : result;
  }
  ngOnInit(): void {
    this.control = this.ngControl.control;
  }
}
