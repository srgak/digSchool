import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';
import { GraphqlPupilsService } from '../../services/graphQL/pupils/graphql-pupils.service';
import { UserData } from 'libs/api-interfaces/src';

export const userPupilsResolver: ResolveFn<UserData[]> = (): Observable<UserData[]> => {
  return inject(GraphqlPupilsService).getPupils();
};
