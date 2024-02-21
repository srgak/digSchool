import { inject } from "@angular/core";
import { ResolveFn } from "@angular/router";
import { Observable, map } from "rxjs";
import { GraphqlMarksService } from "../../services/graphQL/marks/graphql-marks.service";
import { UserIdService } from "../../services/storage/user-id/user-id.service";

export const marksIdResolver: ResolveFn<number> = (): Observable<number> => {
  return inject(GraphqlMarksService)
    .getMarks(inject(UserIdService).prop, ['id'])
    .pipe(
      map(data => +data.id)
    );
}