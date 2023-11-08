import { Injectable, inject } from '@angular/core';
import { StorageProperty } from 'src/app/helpers/interfaces/storage';
import { UserDataService } from '../user-data/user-data.service';

@Injectable({
  providedIn: 'root'
})
export class UserTeachLessonService implements StorageProperty {
  private userData: UserDataService = inject(UserDataService);
  public get prop(): string {
    return this.userData.prop.teachLesson || '';
  }
  public set prop(value: string) {
    this.userData.prop = {
      ...this.userData.prop,
      teachLesson: value
    };
  }
}
