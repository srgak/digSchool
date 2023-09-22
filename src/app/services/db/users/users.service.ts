import { Injectable } from '@angular/core';
import { UserData } from 'src/app/helpers/interfaces/user';
import { UserDB } from './user-db';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private _storage: UserData[] = [
    {
      firstName: 'Админ',
      lastName: 'Админов',
      patronymic: 'Админович',
      role: 'admin',
      id: 1
    },
    {
      firstName: 'Иван',
      lastName: 'Иванов',
      patronymic: 'Иванович',
      role: 'pupil',
      id: 2,
      class: {
        number: 5,
        letter: 'Б'
      }
    }
  ];
  public DB: UserDB = new UserDB(this._storage);
  public get storage(): UserData[] {
    return this._storage;
  }
}