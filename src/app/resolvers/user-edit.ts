import { ActivatedRouteSnapshot, ResolveFn, Router } from "@angular/router";
import { UserData } from "../helpers/interfaces/user";
import { inject } from "@angular/core";
import { UsersService } from "../services/db/users/users.service";

export const userEditResolver: ResolveFn<UserData> = (
  route: ActivatedRouteSnapshot
) => {
  const userData = inject(UsersService);
  const user = userData.DB
    .get(+(route.paramMap.get('id') as string));
  if(!user) inject(Router).navigate(['./']);
  
  return user as UserData;
}