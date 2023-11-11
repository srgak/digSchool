import { Provider } from "@angular/core";
import { BREADCRUMBS } from "../../tokens/breadcrumbs";
import { HttpClient } from "@angular/common/http";

const breadcrumbsFactory = (url: string) => 
  (http: HttpClient) => http
    .get(url)

export const breadcrumbsProvide = (reqUrl: string): Provider => ({
  provide: BREADCRUMBS,
  useFactory: breadcrumbsFactory(reqUrl),
  deps: [HttpClient]
});