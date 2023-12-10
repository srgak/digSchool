import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map, of, switchMap, tap } from "rxjs";
import { getBreadcrumbs, requestBreadcrumbs } from "../actions/breadcrumbs.action";
import { HttpClient } from "@angular/common/http";
import { BreadcrumbItem } from "src/app/helpers/interfaces/breadcrumbs";

@Injectable()
export class BreadcrumbsEffect {
  private loadBreadcrumbs$ = createEffect(() => this.actions$.pipe(
    ofType(requestBreadcrumbs),
    tap(data => data),
    exhaustMap((data) => this.http.get<BreadcrumbItem[]>(data.url)),
    map(data => ({
      list: data
    })),
    switchMap(data => of(getBreadcrumbs(data)))
  ));

  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) {}
}