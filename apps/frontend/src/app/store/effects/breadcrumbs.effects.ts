import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, of, switchMap, tap } from 'rxjs';
import { getBreadcrumbs, requestBreadcrumbs } from '../actions/breadcrumbs.action';
import { CacheBreadcrumbsService } from '../../services/storage/cache-breadcrumbs/cache-breadcrumbs.service';
import { HttpBreadcrumbsService } from '../../services/http/breadcrumbs/http-breadcrumbs.service';

@Injectable()
export class BreadcrumbsEffect {
  private readonly loadBreadcrumbs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestBreadcrumbs),
      exhaustMap((data) => {
        const cache = this.cacheBreadcrumbs.getTarget(data.url);

        return cache
          ? of(cache)
          : this.httpBreadcrumbs.getBreadcrumbs(data.url).pipe(
              tap((response) => {
                this.cacheBreadcrumbs.setTarget({
                  name: data.url,
                  list: response,
                });
              }),
            );
      }),
      map((data) => ({
        list: data,
      })),
      switchMap((data) => of(getBreadcrumbs(data))),
    ),
  );

  constructor(
    private readonly actions$: Actions,
    private readonly httpBreadcrumbs: HttpBreadcrumbsService,
    private readonly cacheBreadcrumbs: CacheBreadcrumbsService,
  ) {}
}
