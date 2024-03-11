import { MenuItem } from 'libs/api-interfaces/src';

export interface MenuState {
  payload: MenuItem[] | null;
}

export const initialMenuState: MenuState = {
  payload: null,
};
