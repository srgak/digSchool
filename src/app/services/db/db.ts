import { Observable } from "rxjs";

export abstract class DB {
  abstract get(name: unknown): void;
  abstract post(data: unknown): void;
  abstract delete(name: unknown): void;
  abstract put(name: unknown, data: unknown): void;
}
export abstract class DBCheck {
  abstract checkItem(data: unknown): Observable<unknown>;
}