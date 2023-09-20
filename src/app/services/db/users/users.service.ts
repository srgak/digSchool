import { Injectable } from '@angular/core';
import { UserData } from 'src/app/helpers/interfaces/user';
import { UserDB } from './user-db';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private storage: UserData[] = [
    {
      firstName: 'Админ',
      lastName: 'Админов',
      patronymic: 'Админович',
      role: 'admin',
      id: 1
    }
  ];
  public currentUser?: UserData;
  public DB: UserDB = new UserDB(this.storage);
}