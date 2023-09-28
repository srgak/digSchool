import { Injectable } from '@angular/core';
import { SelectData, SelectItem } from 'src/app/helpers/interfaces/select';

@Injectable()
export class SelectDataRolesService implements SelectData {
  public readonly list: SelectItem[] = [
    {
      name: 'Администратор',
      value: 'admin'
    },
    {
      name: 'Ученик',
      value: 'pupil'
    },
    {
      name: 'Учитель',
      value: 'teacher'
    }
  ];
}
