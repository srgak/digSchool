import { Injectable } from '@angular/core';
import { GraphQLMain } from '../graphql';
import { filter, map, Observable } from 'rxjs';
import { gql } from 'apollo-angular';
import { GraphQLUserAuth } from '../../../helpers/interfaces/graphql';
import { UserAuth, UserAuthResponse } from 'libs/api-interfaces/src';

@Injectable({
  providedIn: 'root',
})
export class GraphqlAuthService extends GraphQLMain {
  public login(data: UserAuth): Observable<UserAuthResponse> {
    return this.apollo
      .mutate<GraphQLUserAuth>({
        mutation: gql`
          mutation login($input: UserLogin) {
            login(input: $input) {
              id
              accessToken
            }
          }
        `,
        variables: {
          input: data,
        },
      })
      .pipe(
        map((data) => data.data?.login),
        filter((data) => Boolean(data)),
        map((data) => data as UserAuthResponse),
      );
  }
}
