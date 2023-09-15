import { Observable } from "rxjs";

export abstract class DB {
  abstract storage: unknown;
  abstract get(name: string): void;
  abstract post(data: unknown): void;
  abstract delete(name: string): void;
  abstract put(name: string, data: unknown): void;
}
export abstract class DBCheck {
  abstract storage: unknown;
  abstract checkItem(data: unknown): Observable<unknown>;
}