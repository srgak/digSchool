import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthFlagService {
  get isAuth(): boolean {
    return !!JSON.parse(localStorage.getItem('isAuth') || 'false');
  }
  set isAuth(flag: boolean) {
    localStorage.setItem('isAuth', JSON.stringify(flag));
  }
}
