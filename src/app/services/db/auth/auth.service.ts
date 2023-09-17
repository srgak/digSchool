import { Injectable } from '@angular/core';
import { AuthDB, AuthDBCheck } from './auth-db';
import { UserDB } from 'src/app/helpers/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public storage: UserDB[] = [
    {
      login: 'srgak',
      password: 'doshik',
      id: 1
    }
  ];
  public DB: AuthDB = new AuthDB(this.storage);
  public DBChecker: AuthDBCheck = new AuthDBCheck(this.storage);
}
