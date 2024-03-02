import { inject } from '@angular/core';
import { Apollo } from 'apollo-angular';

export class GraphQLMain {
  protected readonly apollo: Apollo = inject(Apollo);

  protected getFieldsString(fields: string[]): string {
    let string = ``;

    fields.forEach((item) => {
      string += `${item},\n`;
    });

    return string;
  }
}
