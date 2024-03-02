import { Injectable } from '@angular/core';
import { SelectData, SelectItem } from '../../../helpers/interfaces/select';

@Injectable()
export class SelectDataLessonsService implements SelectData {
  public readonly list: SelectItem[] = [
    {
      name: 'Математика',
      value: 'Математика',
    },
    {
      name: 'Русский язык',
      value: 'Русский язык',
    },
    {
      name: 'Литература',
      value: 'Литература',
    },
    {
      name: 'Информатика',
      value: 'Информатика',
    },
    {
      name: 'Физика',
      value: 'Физика',
    },
    {
      name: 'Химия',
      value: 'Химимя',
    },
    {
      name: 'Английския язык',
      value: 'Английский язык',
    },
  ];
}
