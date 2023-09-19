import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuListComponent } from './menu-list.component';
import { RouterModule } from '@angular/router';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';



@NgModule({
  declarations: [MenuListComponent],
  imports: [
    CommonModule,
    RouterModule,
    DirectivesModule
  ],
  exports: [MenuListComponent]
})
export class MenuListModule { }
