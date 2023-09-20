import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuListModule } from './menu-list/menu-list.module';
import { SETTINGS_MENU_TOKEN } from 'src/app/helpers/tokens';
import { Observable } from 'rxjs';
import { HttpClient }   from '@angular/common/http';
import { MenuSettings } from 'src/app/helpers/interfaces/menu';


@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    MenuListModule
  ],
  exports: [MenuComponent],
  providers: [
    {
      provide: SETTINGS_MENU_TOKEN,
      useFactory: (http: HttpClient): Observable<MenuSettings> => {
        return http
          .get<MenuSettings>('/assets/data/menu-data.json')
      },
      deps: [
        HttpClient
      ]
    }
  ]
})
export class MenuModule { }