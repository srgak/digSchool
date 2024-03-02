import { filter, Observable } from 'rxjs';

export const notEmptyList = <T>(source$: Observable<T[]>): Observable<T[]> => {
  return source$.pipe(filter((list) => !!list.length));
};
