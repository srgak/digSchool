import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { breadcrumbsReducer } from './breadcrumbs.reducer';
import { menuReducer } from './menu.reducer';

export const appReducers: ActionReducerMap<AppState> = {
  breadcrumbs: breadcrumbsReducer,
  menu: menuReducer,
};
