import { ResolveFn } from "@angular/router";
import { inject } from "@angular/core";
import { Observable, tap } from "rxjs";
import { UserData } from "../../helpers/interfaces/user";
import { UserDataService } from "../../services/storage/user-data/user-data.service";
import { GraphqlUsersService } from "../../services/graphQL/users/graphql-users.service";
import { UserIdService } from "../../services/storage/user-id/user-id.service";

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