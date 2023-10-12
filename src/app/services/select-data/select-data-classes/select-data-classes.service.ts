import { Injectable } from '@angular/core';
import { SelectData, SelectItem } from 'src/app/helpers/interfaces/select';

@Injectable()
export class SelectDataClassesService implements SelectData {
  public readonly list: SelectItem[] = [
    {
      name: '1А',
      value: '1А'
    },
    {
      name: '2А',
      value: '2А'
    },
    {
      name: '3А',
      value: '3А'
    },
    {
      name: '4А',
      value: '4А'
    },
    {
      name: '5А',
      value: '5А'
    },
    {
      name: '5Б',
      value: '5Б'
    },
    {
      name: '6А',
      value: '6А'
    },
    {
      name: '7А',
      value: '7А'
    },
    {
      name: '8А',
      value: '8А'
    },
    {
      name: '9А',
      value: '9А'
    },
    {
      name: '10А',
      value: '10А'
    },
    {
      name: '11А',
      value: '11А'
    }
  ];
}
