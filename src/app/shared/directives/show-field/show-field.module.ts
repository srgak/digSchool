import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowFieldDirective } from './show-field.directive';



@NgModule({
  declarations: [ShowFieldDirective],
  imports: [
    CommonModule
  ],
  exports: [ShowFieldDirective]
})
export class ShowFieldModule { }
