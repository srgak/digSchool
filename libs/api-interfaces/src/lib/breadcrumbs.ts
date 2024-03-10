export interface BreadcrumbItem {
  name: string;
  link?: string;
}
export interface BreadcrumbsData {
  pageName: string;
  list: BreadcrumbItem[];
}
