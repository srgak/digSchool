import { Injectable, inject } from '@angular/core';
import { GraphQLMain } from '../graphql';
import { Observable, map } from 'rxjs';
import { GraphqlUsersService } from '../users/graphql-users.service';
import { gql } from 'apollo-angular';
import { GraphQLMarksInfoList } from '../../../helpers/interfaces/graphql';
import { MarkValue, MarksData } from '../../../helpers/interfaces/marks';

@Injectable({
  providedIn: 'root'
})
export class GraphqlMarksService extends GraphQLMain {
  private graphQLUser: GraphqlUsersService = inject(GraphqlUsersService);

  public getMarks(userId: number, fields: string[]): Observable<MarksData> {
    const data = [
      `marks {
        ${this.getFieldsString(fields)}
      }`
    ];

    return this.graphQLUser.getUserData(userId, data)
      .pipe(
        map(data => data.marks as MarksData)
      );
  }

  public getMarksByLesson(markId: number, lessonName: string): Observable<MarkValue[]> {
    return this.apollo
      .query<GraphQLMarksInfoList>({
        query: gql`
          query getMarksByLesson(
            $id: ID!,
            $lessonName: String!
          ) {
            getMarksByLesson(
              id: $id,
              lessonName: $lessonName
            ) {
              date,
              value,
              description,
              type
            }
          }
        `,
        variables: {
          id: markId,
          lessonName: lessonName
        }
      })
      .pipe(
        map(data => data.data.getMarksByLesson)
      )
  }
}
