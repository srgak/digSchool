import { Injectable } from '@angular/core';
import { StorageProperty } from 'src/app/helpers/interfaces/storage';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService implements StorageProperty {
  get prop(): string {
    return localStorage.getItem('role') || '';
  }
  set prop(value: string) {
    localStorage.setItem('role', value);
  }
}
