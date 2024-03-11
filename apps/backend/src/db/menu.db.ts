import { MainDB } from './main.db';
import { MenuData, MenuItem } from 'libs/api-interfaces/src';

class MenuDB extends MainDB {
  public get menu(): MenuData[] {
    return this.data.menu;
  }

  public set menu(value: MenuData[]) {
    const { data } = this;

    data.menu = value;
    this.data = data;
  }

  public getItem(roleName: string): MenuItem[] {
    const menuData = this.menu.find((item) => item.role === roleName);

    if (!menuData) {
      throw this.triggerError('not_found', true);
    }

    return menuData.list;
  }
}

export const menuDB = new MenuDB();
