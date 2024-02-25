import { BreadcrumbsState, initialBreadcrumbsState } from "./breadcrumbs.state";
import { MenuState, initialMenuState } from "./menu.state";

export interface AppState {
  breadcrumbs: BreadcrumbsState;
  menu: MenuState
}

export const initialAppState: AppState = {
  breadcrumbs: initialBreadcrumbsState,
  menu: initialMenuState
};

export function getInitialState(): AppState {
  return initialAppState;
}