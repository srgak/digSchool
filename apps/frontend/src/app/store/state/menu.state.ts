import { MenuData } from "../../helpers/interfaces/menu";

export interface MenuState {
  payload: MenuData | null;
}

export const initialMenuState: MenuState = {
  payload: null
};