import { Injectable } from '@angular/core';
import { GraphQLMain } from '../graphql';
import { map, Observable } from 'rxjs';
import { gql } from 'apollo-angular';
import { GraphQLUserList } from '../../../helpers/interfaces/graphql';
import { UserData } from 'libs/api-interfaces/src';

@Injectable({
  providedIn: 'root',
})
export class GraphqlPupilsService extends GraphQLMain {
  public getPupils(): Observable<UserData[]> {
    return this.apollo
      .query<GraphQLUserList>({
        query: gql`
          {
            getUserList(filter: { role: "pupil" }) {
              id
              email
              firstName
              lastName
              patronymic
              role
              class
              lessons {
                name
                teacher
              }
              marks {
                id
              }
            }
          }
        `,
      })
      .pipe(map((data) => data.data.getUserList));
  }

  public getPupilsByClass(
    className: string,
    fields: string[] = [
      'id',
      'email',
      'firstName',
      'lastName',
      'patronymic',
      'role',
      'class',
      'lessons {name, teacher}',
      'marks {id}',
    ],
  ): Observable<UserData[]> {
    return this.apollo
      .query<GraphQLUserList>({
        query: gql`
          query getUserList($class: String!) {
            getUserList(filter: {
              role: "pupil",
              class: $class
            }) {
              ${this.getFieldsString(fields)}
            }
          }
        `,
        variables: {
          class: className,
        },
      })
      .pipe(map((data) => data.data.getUserList));
  }
}
