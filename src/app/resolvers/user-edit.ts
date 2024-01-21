import { ActivatedRouteSnapshot, ResolveFn } from "@angular/router";
import { UserData } from "../helpers/interfaces/user";
import { inject } from "@angular/core";
import { Observable } from "rxjs";
import { GraphqlUsersService } from "../services/graphQL/users/graphql-users.service";

export const userEditResolver: ResolveFn<UserData> = (
  route: ActivatedRouteSnapshot
): Observable<UserData> => {
  const graphqlUsers = inject(GraphqlUsersService);
  const userId = +(route.paramMap.get('id') as string);

  return graphqlUsers.getUserDataFull(userId);
}