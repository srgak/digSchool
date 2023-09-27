import { Injectable } from '@angular/core';
import { StorageProperty } from 'src/app/helpers/interfaces/storage';

@Injectable({
  providedIn: 'root'
})
export class AccessTokenService implements StorageProperty {
  get prop(): string {
    return localStorage.getItem('accessToken') || '';
  }
  set prop(value: string) {
    localStorage.setItem('accessToken', value);
  }
  public remove(): void {
    localStorage.removeItem('accessToken');
  }
}