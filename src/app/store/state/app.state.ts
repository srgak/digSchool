import { BreadcrumbsState, initialBreadcrumbsState } from "./breadcrumbs.state";

export interface AppState {
  breadcrumbs: BreadcrumbsState
}

export const initialAppState: AppState = {
  breadcrumbs: initialBreadcrumbsState
};

export function getInitialState(): AppState {
  return initialAppState;
}