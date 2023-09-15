import { Observable } from "rxjs";
import { DB, DBCheck } from "../db";
import { User, UserResponse } from "../types";

export class AuthDB extends DB {
  public override storage: User[];
  constructor(storage: User[]) {
    super();
    this.storage = storage;
  }
  public override get(name: string): User | undefined {
    return this.storage.find(user => user.login === name);
  }
  public override post(data: User): void {
    this.storage.push(data);
  }
  public override delete(name: string): void {
    const index = this.storage.findIndex(user => user.login === name);
    this.storage.splice(index, 1);
  }
  public override put(name: string, data: User): void {
    const index = this.storage.findIndex(user => user.login === name);
    this.storage.splice(index, 1, data)
  }
}

export class AuthDBCheck extends DBCheck {
  public override storage: User[];
  constructor(storage: User[]) {
    super();
    this.storage = storage;
  }
  public override checkItem(user: User): Observable<UserResponse> {
    const list = this.storage.filter(item => JSON.stringify(item) === JSON.stringify(user));
    return new Observable(subscriber => {
      if(list.length) {
        subscriber.next({
          status: 200,
          message: 'success'
        })
      } else {
        subscriber.error({
          status: 400,
          message: 'not found'
        })
      }
    });
  }
}