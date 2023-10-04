import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { MenuSettings } from "../interfaces/menu";

export const SETTINGS_MENU_TOKEN = new InjectionToken<Observable<MenuSettings>>('Настройки меню для пользователя');