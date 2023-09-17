import { Injectable } from '@angular/core';
import { StorageProperty } from 'src/app/helpers/interfaces/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthFlagService implements StorageProperty {
  get prop(): boolean {
    return !!JSON.parse(localStorage.getItem('isAuth') || 'false');
  }
  set prop(value: boolean) {
    localStorage.setItem('isAuth', JSON.stringify(value));
  }
}
