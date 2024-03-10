import { BreadcrumbItem } from 'libs/api-interfaces/src';

export interface BreadcrumbsState {
  list: BreadcrumbItem[] | null;
}

export const initialBreadcrumbsState: BreadcrumbsState = {
  list: null,
};
