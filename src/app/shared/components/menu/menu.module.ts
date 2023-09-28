import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuListModule } from './menu-list/menu-list.module';
import { SETTINGS_MENU_TOKEN } from 'src/app/helpers/tokens';
import { Observable, map } from 'rxjs';
import { HttpClient }   from '@angular/common/http';
import { MenuData, MenuSettings } from 'src/app/helpers/interfaces/menu';
import { UserRoleService } from 'src/app/services/storage/user-role/user-role.service';


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
      useFactory: (
        http: HttpClient,
        role: UserRoleService
      ): Observable<MenuData> => {
        return http
          .get<MenuSettings>('/assets/data/menu-data.json')
          .pipe(
            map(data => data[role.prop])
          )
      },
      deps: [
        HttpClient,
        UserRoleService
      ]
    }
  ]
})
export class MenuModule { }