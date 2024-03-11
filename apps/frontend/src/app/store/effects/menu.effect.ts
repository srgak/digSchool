import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getMenu, requestMenu } from '../actions/menu.action';
import { exhaustMap, map, of, switchMap, tap } from 'rxjs';
import { CacheMenuService } from '../../services/storage/cache-menu/cache-menu.service';
import { HttpMenuService } from '../../services/http/menu/http-menu.service';

@Injectable()
export class MenuEffect {
  private readonly loadMenu$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestMenu),
      map((data) => data.role),
      exhaustMap((role) => {
        const cache = this.cacheMenu.getTarget(role);

        return cache
          ? of(cache)
          : this.httpMenu.getMenu(role).pipe(
              tap((response) => {
                this.cacheMenu.setTarget({
                  name: role,
                  list: response,
                });
              }),
            );
      }),
      map((data) => ({
        payload: data,
      })),
      switchMap((data) => of(getMenu(data))),
    ),
  );

  constructor(
    private readonly actions$: Actions,
    private readonly httpMenu: HttpMenuService,
    private readonly cacheMenu: CacheMenuService,
  ) {}
}
