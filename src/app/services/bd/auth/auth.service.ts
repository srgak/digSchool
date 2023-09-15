import { Injectable } from '@angular/core';
import { User } from '../types';
import { AuthDB, AuthDBCheck } from './authDB';

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
