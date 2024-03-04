import { inject, Injectable } from '@angular/core';
import { UserDataService } from '../user-data/user-data.service';
import { StorageProperty } from '../../../helpers/interfaces/storage';

@Injectable({
  providedIn: 'root',
})
export class UserIdService implements StorageProperty {
  private readonly userData: UserDataService = inject(UserDataService);
  public get prop(): number {
    return +this.userData.prop.id;
  }
  public set prop(value: number) {
    this.userData.prop = {
      ...this.userData.prop,
      id: value,
    };
  }
}
