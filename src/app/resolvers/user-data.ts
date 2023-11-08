import { ResolveFn } from "@angular/router";
import { UserData } from "../helpers/interfaces/user";
import { inject } from "@angular/core";
import { UserIdService } from "../services/storage/user-id/user-id.service";
import { Observable, tap } from "rxjs";
import { HttpUsersService } from "../services/http/users/http-users.service";
import { UserDataService } from "../services/storage/user-data/user-data.service";

export const userDataResolver: ResolveFn<UserData> = (): Observable<UserData> => {
  const userData = inject(UserDataService);
  return inject(HttpUsersService).getUserData(inject(UserIdService).prop)
    .pipe(
      tap(data => {
        userData.prop = data
      })
    );
}