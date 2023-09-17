import { Injectable } from '@angular/core';
import { User } from '../../../helpers/types';
import { AuthDB, AuthDBCheck } from './auth-db';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public storage: User[] = [
    {
      login: 'srgak',
      password: 'doshik'
    }
  ];
  public DB: AuthDB = new AuthDB(this.storage);
  public DBChecker: AuthDBCheck = new AuthDBCheck(this.storage);
}
