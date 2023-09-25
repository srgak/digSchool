import { ActivatedRouteSnapshot, ResolveFn } from "@angular/router";
import { UserData } from "../helpers/interfaces/user";
import { inject } from "@angular/core";
import { Observable, filter, map } from "rxjs";
import { HttpService } from "../services/http/http.service";

export const userEditResolver: ResolveFn<UserData> = (
  route: ActivatedRouteSnapshot
): Observable<UserData> => {
  return inject(HttpService).getUserData(
    +(route.paramMap.get('id') as string)
  )
    .pipe(
      filter(list => !!list.length),
      map(data => data[0]),
    );
}