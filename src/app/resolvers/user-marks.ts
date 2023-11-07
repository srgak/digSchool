import { ActivatedRouteSnapshot, ResolveFn } from "@angular/router";
import { Observable, map } from "rxjs";
import { Mark } from "../helpers/interfaces/marks";
import { inject } from "@angular/core";
import { MarksService } from "../services/http/marks/marks.service";

export const userMarksResolver: ResolveFn<Mark[]> = (
    activeRoute: ActivatedRouteSnapshot
  ): Observable<Mark[]> => {
  return inject(MarksService).getMarks(activeRoute.params['id'])
    .pipe(
      map(data => data.data)
    );
}