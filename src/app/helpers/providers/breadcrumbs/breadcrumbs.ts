import { Provider } from "@angular/core";
import { BREADCRUMBS_URL } from "../../tokens/breadcrumbs";

export const breadcrumbsProvide = (reqUrl: string): Provider => ({
  provide: BREADCRUMBS_URL,
  useValue: reqUrl
});