import { Injectable } from '@angular/core';
import { StorageProperty } from '../../../helpers/interfaces/storage';
import { BreadcrumbItem } from 'libs/api-interfaces/src';

@Injectable({
  providedIn: 'root',
})
export class CacheBreadcrumbsService implements StorageProperty {
  public get prop(): Map<string, BreadcrumbItem[]> {
    const data = JSON.parse(sessionStorage.getItem('breadcrumbs') || '{}');

    return new Map<string, BreadcrumbItem[]>(Object.entries(data));
  }
  public set prop(value: Map<string, BreadcrumbItem[]>) {
    sessionStorage.setItem('breadcrumbs', JSON.stringify(Object.fromEntries(value)));
  }
  public remove(): void {
    sessionStorage.removeItem('breadcrumbs');
  }
  public getTarget(target: string): BreadcrumbItem[] | null {
    const data = this.prop;

    return !data.size ? null : data.get(target) || null;
  }
  public setTarget(value: { name: string; list: BreadcrumbItem[] }): void {
    const data = this.prop;

    data.set(value.name, value.list);
    this.prop = data;
  }
}
