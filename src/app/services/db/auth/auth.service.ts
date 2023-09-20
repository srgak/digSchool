import { Injectable } from '@angular/core';
import { AuthDB, AuthDBCheck } from './auth-db';
import { UserAuthDB } from 'src/app/helpers/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private storage: UserAuthDB[] = [
    {
      login: 'srgak',
      password: 'doshik',
      id: 1
    }
  ];
  public DB: AuthDB = new AuthDB(this.storage);
  public DBChecker: AuthDBCheck = new AuthDBCheck(this.storage);
}
