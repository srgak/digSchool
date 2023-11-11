import { HttpClient } from "@angular/common/http";
import { Provider } from "@angular/core";
import { UserRoleService } from "src/app/services/storage/user-role/user-role.service";
import { SETTINGS_MENU_TOKEN } from "../tokens/menu";
import { MenuData, MenuSettings } from "../interfaces/menu";
import { Observable, map } from "rxjs";

const menuSettingsFactory = (
    http: HttpClient,
    role: UserRoleService
  ): Observable<MenuData> => http
    .get<MenuSettings>('assets/data/menu-data.json')
    .pipe(
      map(data => data[role.prop])
    )

export const menuSettingsProvide: Provider = {
  provide: SETTINGS_MENU_TOKEN,
  useFactory: menuSettingsFactory,
  deps: [
    HttpClient,
    UserRoleService
  ]
}