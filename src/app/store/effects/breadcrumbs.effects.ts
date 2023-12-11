import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map, of, switchMap, tap } from "rxjs";
import { getBreadcrumbs, requestBreadcrumbs } from "../actions/breadcrumbs.action";
import { CacheBreadcrumbsService } from "src/app/services/storage/cache-breadcrumbs/cache-breadcrumbs.service";
import { HttpBreadcrumbsService } from "src/app/services/http/breadcrumbs/http-breadcrumbs.service";

@Injectable()
export class BreadcrumbsEffect {
  private loadBreadcrumbs$ = createEffect(() => this.actions$.pipe(
    ofType(requestBreadcrumbs),
    exhaustMap(data => {
      const cache = this.cacheBreadcrumbs.getTarget(data.url);

      return cache ? of(cache)
        : this.httpBreadcrumbs.getBreadcrumbs(data.url).pipe(
          tap(response => {
            this.cacheBreadcrumbs.setTarget({
              name: data.url,
              list: response
            });
          })
      );
    }),
    map(data => ({
      list: data
    })),
    switchMap(data => of(getBreadcrumbs(data)))
  ));

  constructor(
    private actions$: Actions,
    private httpBreadcrumbs: HttpBreadcrumbsService,
    private cacheBreadcrumbs: CacheBreadcrumbsService
  ) {}
}