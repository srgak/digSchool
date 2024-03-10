import { Provider } from '@angular/core';
import { PAGE_NAME } from '../tokens/page-name.token';

export const pageNameProvide = (name: string): Provider => ({
  provide: PAGE_NAME,
  useValue: name,
});
