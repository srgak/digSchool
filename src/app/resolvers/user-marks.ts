import { ResolveFn } from "@angular/router";
import { Observable, map } from "rxjs";
import { Mark } from "../helpers/interfaces/marks";
import { inject } from "@angular/core";
import { MarksService } from "../services/http/marks/marks.service";
import { UserIdService } from "../services/storage/user-id/user-id.service";

export const userMarksResolver: ResolveFn<Mark[]> = (): Observable<Mark[]> => {
  return inject(MarksService).getMarks(inject(UserIdService).prop)
    .pipe(
      map(data => data.data)
    );
}