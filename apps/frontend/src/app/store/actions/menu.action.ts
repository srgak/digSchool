import { createAction, props } from "@ngrx/store";
import { MenuState } from "../state/menu.state";

export const requestMenu = createAction('[MENU] request menu', props<{role: string}>());
export const getMenu = createAction('[MENU] get menu', props<MenuState>());