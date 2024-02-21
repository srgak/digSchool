import { Injectable } from '@angular/core';
import { StorageProperty } from 'src/app/helpers/interfaces/storage';

@Injectable({
  providedIn: 'root'
})
export class MarksIdService implements StorageProperty {
  public get prop(): number {
    return JSON.parse(localStorage.getItem('marksId') || '0');
  }
  public set prop(value: number) {
    localStorage.setItem('marksId', JSON.stringify(value));
  }
}
