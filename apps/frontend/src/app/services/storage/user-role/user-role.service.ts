import { Injectable, inject } from '@angular/core';
import { StorageProperty } from '../../../helpers/interfaces/storage';
import { UserDataService } from '../user-data/user-data.service';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService implements StorageProperty {
  private userData: UserDataService = inject(UserDataService);
  public get prop(): string {
    return this.userData.prop.role;
  }
  public set prop(value: string) {
    this.userData.prop = {
      ...this.userData.prop,
      role: value
    };
  }
}
