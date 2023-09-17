import { Injectable } from '@angular/core';
import { StorageProperty } from 'src/app/helpers/interfaces/storage';

@Injectable({
  providedIn: 'root'
})
export class UserIdService implements StorageProperty {
  get prop(): number {
    return JSON.parse(localStorage.getItem('id') || '0')
  }
  set prop(value: number) {
    localStorage.setItem('id', JSON.stringify(value));
  }
}
