import { BreadcrumbsData, MarksData, UserData } from 'libs/api-interfaces/src';

export interface TotalData {
  users: UserData[];
  marks: MarksData[];
  breadcrumbs: BreadcrumbsData[];
}
