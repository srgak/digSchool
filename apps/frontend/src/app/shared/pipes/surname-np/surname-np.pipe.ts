import { Pipe, PipeTransform } from '@angular/core';

interface FIO {
  firstName: string;
  lastName: string;
  patronymic: string;
}

@Pipe({
  name: 'surnameNP',
})
export class SurnameNPPipe implements PipeTransform {
  transform(value: FIO): string {
    return `${value.lastName} ${value.firstName[0]}. ${value.patronymic[0]}.`;
  }
}
