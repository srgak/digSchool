import { createAction, props } from '@ngrx/store';
import { BreadcrumbsState } from '../state/breadcrumbs.state';

export const requestBreadcrumbs = createAction(
  '[BREADCRUMBS] request breadcrumbs',
  props<{ url: string }>(),
);
export const getBreadcrumbs = createAction(
  '[BREADCRUMBS] get breadcrumbs',
  props<BreadcrumbsState>(),
);
