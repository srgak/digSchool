import { Injectable } from '@angular/core';
import { StorageProperty } from '../../../helpers/interfaces/storage';
import { MenuItem } from 'libs/api-interfaces/src';

@Injectable({
  providedIn: 'root',
})
export class CacheMenuService implements StorageProperty {
  get prop(): Map<string, MenuItem[]> {
    const data = JSON.parse(sessionStorage.getItem('menu') || '{}');

    return new Map<string, MenuItem[]>(Object.entries(data));
  }
  set prop(value: Map<string, MenuItem[]>) {
    sessionStorage.setItem('menu', JSON.stringify(Object.fromEntries(value)));
  }
  remove(): void {
    sessionStorage.removeItem('menu');
  }
  public getTarget(target: string): MenuItem[] | null {
    const data = this.prop;

    return !data.size ? null : data.get(target) || null;
  }
  public setTarget(value: { name: string; list: MenuItem[] }): void {
    const data = this.prop;

    data.set(value.name, value.list);
    this.prop = data;
  }
}
