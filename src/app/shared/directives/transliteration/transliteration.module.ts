import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransliterationDirective } from './transliteration.directive';



@NgModule({
  declarations: [TransliterationDirective],
  imports: [
    CommonModule
  ],
  exports: [TransliterationDirective]
})
export class TransliterationModule { }
