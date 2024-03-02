import { createReducer, on } from '@ngrx/store';
import { initialMenuState } from '../state/menu.state';
import { getMenu } from '../actions/menu.action';

export const menuReducer = createReducer(
  initialMenuState,
  on(getMenu, (state, action) => ({
    ...state,
    payload: action.payload,
  })),
);
