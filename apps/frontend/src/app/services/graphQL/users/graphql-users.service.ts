import { Injectable } from '@angular/core';
import { GraphQLMain } from '../graphql';
import { filter, map, Observable } from 'rxjs';
import { gql } from 'apollo-angular';
import {
  GraphQLUser,
  GraphQlUserCreate,
  GraphQLUserDelete,
  GraphQLUserList,
  GraphQLUserUpdate,
} from '../../../helpers/interfaces/graphql';
import { LessonData, UserData, UserId } from 'libs/api-interfaces/src';

@Injectable({
  providedIn: 'root',
})
export class GraphqlUsersService extends GraphQLMain {
  public getUserData(id: number, fields: string[]): Observable<UserData> {
    return this.apollo
      .query<GraphQLUser>({
        query: gql`
          query getUser($id: ID!) {
            getUser(id: $id) {
              ${this.getFieldsString(fields)}
            }
          }
        `,
        variables: {
          id: id,
        },
      })
      .pipe(map((data) => data.data.getUser));
  }

  public getUserDataBadge(id: number): Observable<UserData> {
    const fields = ['id', 'firstName', 'lastName', 'patronymic', 'role', 'teachLesson'];

    return this.getUserData(id, fields);
  }

  public getUserDataFull(id: number): Observable<UserData> {
    const fields = [
      'id',
      'email',
      'firstName',
      'lastName',
      'patronymic',
      'role',
      'class',
      'lessons {name, teacher}',
      'teachLesson',
    ];

    return this.getUserData(id, fields);
  }

  public getUserList(): Observable<UserData[]> {
    return this.apollo
      .query<GraphQLUserList>({
        query: gql`
          {
            getUserList {
              id
              firstName
              lastName
              patronymic
              role
            }
          }
        `,
      })
      .pipe(map((data) => data.data.getUserList));
  }

  public deleteUserData(id: number): Observable<UserId> {
    return this.apollo
      .mutate<GraphQLUserDelete>({
        mutation: gql`
          mutation deleteUser($id: ID!) {
            deleteUser(id: $id)
          }
        `,
        variables: {
          id: id,
        },
      })
      .pipe(
        map((data) => data.data?.deleteUser),
        filter((data) => Boolean(data)),
        map((data) => data as UserId),
      );
  }

  public editUserData(data: UserData): Observable<UserData> {
    return this.apollo
      .mutate<GraphQLUserUpdate>({
        mutation: gql`
          mutation editUser($input: UserInput) {
            editUser(input: $input) {
              id
            }
          }
        `,
        variables: {
          input: data,
        },
      })
      .pipe(
        map((data) => data.data?.editUser),
        filter((data) => Boolean(data)),
        map((data) => data as UserData),
      );
  }

  public createUserData(data: UserData): Observable<UserData> {
    return this.apollo
      .mutate<GraphQlUserCreate>({
        mutation: gql`
          mutation createUser($input: UserInput) {
            createUser(input: $input) {
              id
            }
          }
        `,
        variables: {
          input: data,
        },
      })
      .pipe(
        map((data) => data.data?.createUser),
        filter((data) => Boolean(data)),
        map((data) => data as UserData),
      );
  }

  public getUserDataLessons(id: number): Observable<LessonData[]> {
    const fields = ['lessons {name, teacher}'];

    return this.getUserData(id, fields).pipe(
      map((data) => data.lessons),
      filter((data) => Boolean(data)),
      map((data) => data as LessonData[]),
    );
  }
}
