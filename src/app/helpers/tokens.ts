import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";

export const SETTINGS_MENU_TOKEN = new InjectionToken<Observable<any>>('Настройки меню для пользователя');