import { InjectionToken } from "@angular/core";
import { BreadcrumbItem } from "../interfaces/breadcrumbs";
import { pageName } from "../routes";

export const BREADCRUMBS = new InjectionToken<BreadcrumbItem[]>('Хлебные крошки');
// export const BREADCRUMBS_CONTROL_PANEL: BreadcrumbItem[] = [
//   {
//     name: 'Панель управления'
//   }
// ];
// export const BREADCRUMBS_CONTROL_PANEL_EDIT: BreadcrumbItem[] = [
//   {
//     name: 'Панель управления',
//     link: `${pageName.ControlPanel}`
//   },
//   {
//     name: 'Реадктирование'
//   }
// ];
// export const BREADCRUMBS_JOURNAL: BreadcrumbItem[] = [
//   {
//     name: 'Журнал'
//   }
// ];
export const BREADCRUMBS_JOURNAL_MARKS: BreadcrumbItem[] = [
  {
    name: 'Журнал',
    link: `${pageName.Journal}`
  },
  {
    name: 'Оценки'
  }
];