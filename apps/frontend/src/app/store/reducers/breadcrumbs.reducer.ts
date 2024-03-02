import { createReducer, on } from '@ngrx/store';
import { initialBreadcrumbsState } from '../state/breadcrumbs.state';
import { getBreadcrumbs } from '../actions/breadcrumbs.action';

export const breadcrumbsReducer = createReducer(
  initialBreadcrumbsState,
  on(getBreadcrumbs, (state, action) => ({
    ...state,
    list: action.list,
  })),
);
