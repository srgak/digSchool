import { ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { GraphqlUsersService } from '../../services/graphQL/users/graphql-users.service';
import { UserIdService } from '../../services/storage/user-id/user-id.service';
import { LessonData } from 'libs/api-interfaces/src';

export const userLessonsResolver: ResolveFn<LessonData[]> = (): Observable<LessonData[]> => {
  return inject(GraphqlUsersService).getUserDataLessons(inject(UserIdService).prop);
};
