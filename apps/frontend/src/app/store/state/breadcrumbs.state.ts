import { BreadcrumbItem } from '../../helpers/interfaces/breadcrumbs';

export interface BreadcrumbsState {
  list: BreadcrumbItem[] | null;
}

export const initialBreadcrumbsState: BreadcrumbsState = {
  list: null,
};
