import { Observable } from "rxjs";

export abstract class DB {
  abstract storage: unknown;
  abstract get(name: unknown): void;
  abstract post(data: unknown): void;
  abstract delete(name: unknown): void;
  abstract put(name: unknown, data: unknown): void;
}
export abstract class DBCheck {
  abstract storage: unknown;
  abstract checkItem(data: unknown): Observable<unknown>;
}