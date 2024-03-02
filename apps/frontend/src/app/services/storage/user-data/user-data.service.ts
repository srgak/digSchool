import { Injectable } from '@angular/core';
import { StorageProperty } from '../../../helpers/interfaces/storage';
import { UserData } from '../../../helpers/interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserDataService implements StorageProperty {
  public get prop(): UserData {
    return JSON.parse(localStorage.getItem('userData') || '{}');
  }
  public set prop(value: UserData) {
    localStorage.setItem('userData', JSON.stringify(value));
  }
  public remove(): void {
    localStorage.removeItem('userData');
  }
}
