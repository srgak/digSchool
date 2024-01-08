import { inject } from "@angular/core";
import { Apollo } from "apollo-angular";

export class GraphQLMain {
  public readonly apollo: Apollo = inject(Apollo);
  
  public getFieldsString(fields: string[]): string {
    let string = ``;

    fields.forEach(item => {
      string += `${item},`;
    });

    return string;
  }
}