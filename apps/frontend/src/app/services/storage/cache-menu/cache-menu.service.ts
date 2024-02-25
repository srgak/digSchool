import { Injectable } from '@angular/core';
import { MenuData } from '../../../helpers/interfaces/menu';
import { StorageProperty } from '../../../helpers/interfaces/storage';

@Injectable({
  providedIn: 'root'
})
export class CacheMenuService implements StorageProperty {
  get prop(): Map<string, MenuData> {
    const data = JSON.parse(sessionStorage.getItem('menu') || '{}');

    return new Map<string, MenuData>(Object.entries(data));
  }
  set prop(value: Map<string, MenuData>) {
    sessionStorage.setItem('menu', JSON.stringify(Object.fromEntries(value)));
  }
  remove(): void {
    sessionStorage.removeItem('menu');
  }
  public getTarget(target: string): MenuData | null {
    const data = this.prop;

    return !data.size ? null : (data.get(target) || null);
  }
  public setTarget(value: {name: string; list: MenuData}): void {
    const data = this.prop;

    data.set(value.name, value.list);
    this.prop = data;
  }
}
