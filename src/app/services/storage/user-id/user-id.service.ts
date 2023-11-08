import { Injectable, inject } from '@angular/core';
import { StorageProperty } from 'src/app/helpers/interfaces/storage';
import { UserDataService } from '../user-data/user-data.service';

@Injectable({
  providedIn: 'root'
})
export class UserIdService implements StorageProperty {
  private userData: UserDataService = inject(UserDataService);
  public get prop(): number {
    return this.userData.prop.id;
  }
  public set prop(value: number) {
    this.userData.prop = {
      ...this.userData.prop,
      id: value
    };
  }
}
