import { ResolveFn } from "@angular/router";
import { LessonData } from "backend/src/interfaces/lesson";
import { Observable } from "rxjs";
import { inject } from "@angular/core";
import { GraphqlUsersService } from "src/app/services/graphQL/users/graphql-users.service";
import { UserIdService } from "src/app/services/storage/user-id/user-id.service";

export const userLessonsResolver: ResolveFn<LessonData[]> = (): Observable<LessonData[]> => {
  return inject(GraphqlUsersService)
    .getUserDataLessons(inject(UserIdService).prop);
}