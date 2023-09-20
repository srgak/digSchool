import { Observable } from "rxjs";
import { DB, DBCheck } from "../db";
import { UserAuthDB, UserAuthForm, UserAuthResponse } from "src/app/helpers/interfaces/user";

export class AuthDB extends DB {
  private storage: UserAuthDB[];
  constructor(storage: UserAuthDB[]) {
    super();
    this.storage = storage;
  }
  public override get(name: string): UserAuthDB | undefined {
    return this.storage.find(user => user.login === name);
  }
  public override post(data: UserAuthDB): void {
    this.storage.push(data);
  }
  public override delete(name: string): void {
    const index = this.storage.findIndex(user => user.login === name);
    this.storage.splice(index, 1);
  }
  public override put(name: string, data: UserAuthDB): void {
    const index = this.storage.findIndex(user => user.login === name);
    this.storage.splice(index, 1, data)
  }
}

export class AuthDBCheck extends DBCheck {
  private storage: UserAuthDB[];
  constructor(storage: UserAuthDB[]) {
    super();
    this.storage = storage;
  }
  public override checkItem(user: UserAuthForm): Observable<UserAuthResponse> {
    const searchedUser = this.storage.find(
      item => item.login === user.login && item.password === user.password
    );
    return new Observable(subscriber => {
      if(searchedUser) {
        subscriber.next({
          status: 200,
          message: 'success',
          id: searchedUser.id
        })
      } else {
        subscriber.error({
          status: 404,
          message: 'not found'
        })
      }
    });
  }
}