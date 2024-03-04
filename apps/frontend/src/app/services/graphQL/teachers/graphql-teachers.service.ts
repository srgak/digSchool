import { Injectable } from '@angular/core';
import { GraphQLMain } from '../graphql';
import { map, Observable } from 'rxjs';
import { gql } from 'apollo-angular';
import { GraphQLUserList } from '../../../helpers/interfaces/graphql';
import { UserData } from 'libs/api-interfaces/src';

@Injectable({
  providedIn: 'root',
})
export class GraphqlTeachersService extends GraphQLMain {
  public getTeachers(
    fields: string[] = [
      'id',
      'email',
      'firstName',
      'lastName',
      'patronymic',
      'role',
      'teachLesson',
    ],
  ): Observable<UserData[]> {
    return this.apollo
      .query<GraphQLUserList>({
        query: gql`
          {
            getUserList(filter: {
              role: "teacher"
            }) {
              ${this.getFieldsString(fields)}
            }
          }
        `,
      })
      .pipe(map((data) => data.data.getUserList));
  }

  public getTeachersByLesson(lesson: string): Observable<UserData[]> {
    return this.apollo
      .query<GraphQLUserList>({
        query: gql`
          query getUserList($teacheLesson: String) {
            getUserList(filter: { role: "teacher", teacheLesson: $teacheLesson }) {
              id
              email
              firstName
              lastName
              patronymic
              role
              teachLesson
            }
          }
        `,
        variables: {
          teacheLesson: lesson,
        },
      })
      .pipe(map((data) => data.data.getUserList));
  }
}
