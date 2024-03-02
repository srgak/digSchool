import { EventEmitter } from '@angular/core';

export interface TableMain {
  data: unknown[];
  onSelect: EventEmitter<any>;
  columnList: string[];
}
