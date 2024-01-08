import { ActivatedRouteSnapshot, ResolveFn } from "@angular/router";
import { UserData } from "../helpers/interfaces/user";
import { inject } from "@angular/core";
import { Observable, forkJoin, map } from "rxjs";
import { GraphqlUsersService } from "../services/graphQL/users/graphql-users.service";
import { HttpUsersService } from "../services/http/users/http-users.service";

export const userEditResolver: ResolveFn<UserData> = (
  route: ActivatedRouteSnapshot
): Observable<UserData> => {
  const httpUsers = inject(HttpUsersService);
  const graphqlUsers = inject(GraphqlUsersService);
  const userId = +(route.paramMap.get('id') as string);

  return forkJoin([
    httpUsers.getUserData(userId),
    graphqlUsers.getUserDataFull(userId)
  ]).pipe(
    map(([response1, response2]) => ({...response1, ...response2}))
  );
}