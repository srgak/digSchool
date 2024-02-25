import { createSelector } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { BreadcrumbsState } from "../state/breadcrumbs.state";

export const featureSelector = (state: AppState) => state.breadcrumbs;
export const breadcrumbsSelector = createSelector(
  featureSelector,
  (state: BreadcrumbsState) => state.list
);