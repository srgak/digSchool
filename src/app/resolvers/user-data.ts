import { ResolveFn } from "@angular/router";
import { UserData } from "../helpers/interfaces/user";
import { inject } from "@angular/core";
import { UserIdService } from "../services/storage/user-id/user-id.service";
import { HttpService } from "../services/http/http.service";
import { Observable, map, tap } from "rxjs";
import { UserRoleService } from "../services/storage/user-role/user-role.service";

export const userDataResolver: ResolveFn<UserData> = (): Observable<UserData> => {
  const role = inject(UserRoleService);
  return inject(HttpService).getUserData(inject(UserIdService).prop)
    .pipe(
      tap(data => {
        role.prop = data.role;
      })
    );
}