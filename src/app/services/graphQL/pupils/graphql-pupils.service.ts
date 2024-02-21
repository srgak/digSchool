import { Injectable } from '@angular/core';
import { GraphQLMain } from '../graphql';
import { Observable, map } from 'rxjs';
import { UserData } from 'src/app/helpers/interfaces/user';
import { gql } from 'apollo-angular';
import { GraphQLUserList } from 'src/app/helpers/interfaces/graphql';

@Injectable({
  providedIn: 'root'
})
export class GraphqlPupilsService extends GraphQLMain {
  public getPupils(): Observable<UserData[]> {
    return this.apollo
      .query<GraphQLUserList>({
        query: gql`
          {
            getUserList(filter: {
              role: "pupil"
            }) {
              id,
              email,
              firstName,
              lastName,
              patronymic,
              role,
              class,
              lessons {
                name,
                teacher
              },
              marks {
                id
              }
            }
          }
        `
      })
      .pipe(
        map(data => data.data.getUserList)
      )
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
      'marks {id}'
    ]
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
          class: className
        }
      })
      .pipe(
        map(data => data.data.getUserList)
      )
  }
}
