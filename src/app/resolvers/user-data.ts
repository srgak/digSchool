import { ResolveFn } from "@angular/router";
import { UserData } from "../helpers/interfaces/user";
import { inject } from "@angular/core";
import { UserIdService } from "../services/storage/user-id/user-id.service";
import { Observable, tap } from "rxjs";
import { UserDataService } from "../services/storage/user-data/user-data.service";
import { GraphqlUsersService } from "../services/graphQL/users/graphql-users.service";

export const userDataResolver: ResolveFn<UserData> = (): Observable<UserData> => {
  const userData = inject(UserDataService);
  return inject(GraphqlUsersService)
    .getUserDataBadge(inject(UserIdService).prop)
    .pipe(
      tap(data => {
        userData.prop = data;
      })
    )
}