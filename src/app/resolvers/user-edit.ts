import { ActivatedRouteSnapshot, ResolveFn } from "@angular/router";
import { UserData } from "../helpers/interfaces/user";
import { inject } from "@angular/core";
import { Observable, filter, map } from "rxjs";
import { HttpService } from "../services/http/http.service";
import { AccessTokenService } from "../services/storage/access-token/access-token.service";

export const userEditResolver: ResolveFn<UserData> = (
  route: ActivatedRouteSnapshot
): Observable<UserData> => {
  return inject(HttpService).getUserData(
    +(route.paramMap.get('id') as string)
  )
}