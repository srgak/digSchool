import { BreadcrumbItem, BreadcrumbsData } from 'libs/api-interfaces/src';
import { MainDB } from './main.db';

class BreadcrumbsDB extends MainDB {
  public get breadcrumbs(): BreadcrumbsData[] {
    return this.data.breadcrumbs;
  }

  public set breadcrumbs(value: BreadcrumbsData[]) {
    const { data } = this;

    data.breadcrumbs = value;
    this.data = data;
  }

  public getItem(pageName: string): BreadcrumbItem[] {
    const breadcrumb = this.breadcrumbs.find((item) => item.pageName === pageName);

    if (!breadcrumb) {
      throw this.triggerError('not_found', true);
    }

    return breadcrumb.list;
  }
}

export const breadcrumbsDB = new BreadcrumbsDB();
