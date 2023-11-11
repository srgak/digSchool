import { InjectionToken } from "@angular/core";
import { BreadcrumbItem } from "../interfaces/breadcrumbs";
import { Observable } from "rxjs";

export const BREADCRUMBS = new InjectionToken<Observable<BreadcrumbItem[]>>('Хлебные крошки');