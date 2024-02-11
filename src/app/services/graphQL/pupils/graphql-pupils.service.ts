import { Injectable } from '@angular/core';
import { GraphQLMain } from '../graphql';
import { Observable, map } from 'rxjs';
import { GraphQLUserList, UserData } from 'src/app/helpers/interfaces/user';
import { gql } from 'apollo-angular';

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
              }
            }
          }
        `
      })
      .pipe(
        map(data => data.data.getUserList)
      )
  }

  public getPupilsByClass(className: string): Observable<UserData[]> {
    return this.apollo
      .query<GraphQLUserList>({
        query: gql`
          query getUserList($class: String) {
            getUserList(filter: {
              role: "pupil",
              class: $class
            }) {
              id,
              email,
              firstName,
              lastName,
              patronymic,
              role,
              class,
              lessons
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
