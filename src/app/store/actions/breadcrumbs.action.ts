import { createAction, props } from "@ngrx/store";
import { BreadcrumbsState } from "../state/breadcrumbs.state";

export const getBreadcrumbs = createAction('[BREADCRUMBS] get breadcrumbs', props<BreadcrumbsState>());
