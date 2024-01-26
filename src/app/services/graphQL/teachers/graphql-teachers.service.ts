import { Injectable } from '@angular/core';
import { GraphQLMain } from '../graphql';
import { Observable, map } from 'rxjs';
import { GraphQLUserList, UserData } from 'src/app/helpers/interfaces/user';
import { gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class GraphqlTeachersService extends GraphQLMain {
  public getTeachers(): Observable<UserData[]> {
    return this.apollo
      .query<GraphQLUserList>({
        query: gql`
          {
            getUserList(filter: {
              role: "teacher"
            }) {
              id,
              email,
              firstName,
              lastName,
              patronymic,
              role,
              teachLesson
            }
          }
        `
      })
      .pipe(
        map(data => data.data.getUserList)
      )
  }

  public getTeachersByLesson(lesson: string): Observable<UserData[]> {
    return this.apollo
      .query<GraphQLUserList>({
        query: gql`
          query getUserList($teacheLesson: String) {
            getUserList(filter: {
              role: "teacher",
              teacheLesson: $teacheLesson
            }) {
              id,
              email,
              firstName,
              lastName,
              patronymic,
              role,
              teachLesson
            }
          }
        `,
        variables: {
          teacheLesson: lesson
        }
      })
      .pipe(
        map(data => data.data.getUserList)
      )
  }
}
