import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurnameNPPipe } from './surname-np.pipe';

@NgModule({
  declarations: [SurnameNPPipe],
  imports: [CommonModule],
  exports: [SurnameNPPipe],
})
export class SurnameNpModule {}
