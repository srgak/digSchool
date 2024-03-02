import { createSelector } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { MenuState } from '../state/menu.state';

export const featureSelector = (state: AppState): MenuState => state.menu;
export const menuSelector = createSelector(featureSelector, (state: MenuState) => state.payload);
