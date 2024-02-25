import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { getMenu, requestMenu } from "../actions/menu.action";
import { exhaustMap, map, of, switchMap, tap } from "rxjs";
import { CacheMenuService } from "../../services/storage/cache-menu/cache-menu.service";
import { HttpMenuService } from "../../services/http/menu/http-menu.service";
import { menuUrl } from "../../helpers/menu";

@Injectable()
export class MenuEffect {
  private loadMenu$ = createEffect(() => this.actions$.pipe(
    ofType(requestMenu),
    map(data => menuUrl[data.role]),
    exhaustMap(url => {
      const cache = this.cacheMenu.getTarget(url);

      return cache ? of(cache)
        : this.httpMenu.getMenu(url).pipe(
          tap(response => {
            this.cacheMenu.setTarget({
              name: url,
              list: response
            })
          })
        )
    }),
    map(data => ({
      payload: data
    })),
    switchMap(data => of(getMenu(data)))
  ));

  constructor(
    private actions$: Actions,
    private httpMenu: HttpMenuService,
    private cacheMenu: CacheMenuService
  ) {}
}