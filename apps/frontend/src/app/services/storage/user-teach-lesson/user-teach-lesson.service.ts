import { inject, Injectable } from '@angular/core';
import { UserDataService } from '../user-data/user-data.service';
import { StorageProperty } from '../../../helpers/interfaces/storage';

@Injectable({
  providedIn: 'root',
})
export class UserTeachLessonService implements StorageProperty {
  private readonly userData: UserDataService = inject(UserDataService);
  public get prop(): string {
    return this.userData.prop.teachLesson || '';
  }
  public set prop(value: string) {
    this.userData.prop = {
      ...this.userData.prop,
      teachLesson: value,
    };
  }
}
