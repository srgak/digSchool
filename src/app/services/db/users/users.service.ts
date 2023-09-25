import { Injectable } from '@angular/core';
import { UserData } from 'src/app/helpers/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public currentUser!: UserData;
}