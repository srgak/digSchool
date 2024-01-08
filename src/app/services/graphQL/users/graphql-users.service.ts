import { Injectable } from '@angular/core';
import { GraphQLMain } from '../graphql';
import { GraphQLUser, GraphQLUserList, GraphQLUserRemove, GraphQLUserUpdate, GraphQlUserCreate, UserData } from 'src/app/helpers/interfaces/user';
import { Observable, filter, map } from 'rxjs';
import { gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class GraphqlUsersService extends GraphQLMain {
  private getUserData(id: number, fields: string[]): Observable<UserData> {
    return this.apollo
      .query<GraphQLUser>({
        query: gql`
          query getUser($id: ID!) {
            User(id: $id) {
              ${this.getFieldsString(fields)}
            }
          }
        `,
        variables: {
          id: id
        }
      })
      .pipe(
        map(data => data.data.User)
      )
  }

  public getUserDataBadge(id: number): Observable<UserData> {
    const fields = [
      'id',
      'firstName',
      'lastName',
      'patronymic',
      'role'
    ];

    return this.getUserData(id, fields);
  }

  public getUserDataFull(id: number): Observable<UserData> {
    const fields = [
      'id',
      'firstName',
      'lastName',
      'patronymic',
      'role',
      'class',
      'lessons',
      'teachLesson'
    ];

    return this.getUserData(id, fields);
  }

  public getUserList(): Observable<UserData[]> {
    return this.apollo
      .query<GraphQLUserList>({
        query: gql`
          {
            allUsers {
              id,
              firstName,
              lastName,
              patronymic,
              role
            }
          }
        `
      })
      .pipe(
        map(data => data.data.allUsers)
      )
  }

  public deleteUserData(id: number): Observable<UserData> {
    return this.apollo
      .mutate<GraphQLUserRemove>({
        mutation: gql`
          mutation deleteUser($id: ID!) {
            removeUser(id: $id) {
              id
            }
          }
        `,
        variables: {
          id: id
        }
      })
      .pipe(
        map(data => data.data?.removeUser),
        filter(data => Boolean(data)),
        map(data => data as UserData)
      )
  }

  public editUserData(data: UserData): Observable<UserData> {
    return this.apollo
      .mutate<GraphQLUserUpdate>({
        mutation: gql`
          mutation updateUserData(
            $id: ID!,
            $firstName: String,
            $lastName: String,
            $patronymic: String,
            $role: String,
            $teachLesson: String,
            $class: String,
            $lessons: JSON
          ) {
            updateUser(
              id: $id,
              firstName: $firstName,
              lastName: $lastName,
              patronymic: $patronymic,
              role: $role,
              teachLesson: $teachLesson,
              class: $class,
              lessons: $lessons
            ) {
              id
            }
          }
        `,
        variables: data
      })
      .pipe(
        map(data => data.data?.updateUser),
        filter(data => Boolean(data)),
        map(data => data as UserData)
      )
  }

  public createUserData(data: UserData): Observable<UserData> {
    return this.apollo
      .mutate<GraphQlUserCreate>({
        mutation: gql`
          mutation createUserData(
            $firstName: String!,
            $lastName: String!,
            $patronymic: String!,
            $role: String!,
            $teachLesson: String,
            $class: String,
            $lessons: JSON
          ) {
            createUser(
              firstName: $firstName,
              lastName: $lastName,
              patronymic: $patronymic,
              role: $role,
              teachLesson: $teachLesson,
              class: $class,
              lessons: $lessons
            ) {
              id
            }
          }
        `,
        variables: data
      })
      .pipe(
        map(data => data.data?.createUser),
        filter(data => Boolean(data)),
        map(data => data as UserData)
      )
  }
}
