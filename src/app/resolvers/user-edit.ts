import { ActivatedRouteSnapshot, ResolveFn } from "@angular/router";
import { UserData } from "../helpers/interfaces/user";
import { inject } from "@angular/core";
import { Observable } from "rxjs";
import { HttpUsersService } from "../services/http/users/http-users.service";

export const userEditResolver: ResolveFn<UserData> = (
  route: ActivatedRouteSnapshot
): Observable<UserData> => {
  return inject(HttpUsersService).getUserData(
    +(route.paramMap.get('id') as string)
  )
}