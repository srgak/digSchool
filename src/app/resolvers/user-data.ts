import { ResolveFn } from "@angular/router";
import { UserData } from "../helpers/interfaces/user";
import { inject } from "@angular/core";
import { UsersService } from "../services/db/users/users.service";
import { UserIdService } from "../services/storage/user-id/user-id.service";
import { UserRoleService } from "../services/storage/user-role/user-role.service";

export const userDataResolver: ResolveFn<UserData> = () => {
  const userData = inject(UsersService);
  const user = userData.DB.get(inject(UserIdService).prop);
  inject(UserRoleService).prop = user ? user.role : '';

  return user as UserData;
}