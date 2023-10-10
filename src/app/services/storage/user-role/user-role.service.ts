import { Injectable } from '@angular/core';
import { StorageProperty } from 'src/app/helpers/interfaces/storage';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService implements StorageProperty {
  public get prop(): string {
    return localStorage.getItem('role') || '';
  }
  public set prop(value: string) {
    localStorage.setItem('role', value);
  }
  public remove(): void {
    localStorage.removeItem('role');
  }
}
