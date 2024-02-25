import { inject } from "@angular/core";
import { ResolveFn } from "@angular/router";
import { Observable } from "rxjs";
import { UserData } from "../../helpers/interfaces/user";
import { GraphqlPupilsService } from "../../services/graphQL/pupils/graphql-pupils.service";

export const userPupilsResolver: ResolveFn<UserData[]> = (): Observable<UserData[]> => {
  return inject(GraphqlPupilsService).getPupils();
}