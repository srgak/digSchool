import { Observable } from "rxjs";
import { DB, DBCheck } from "../db";
import { UserDB, UserForm, UserResponseSuccess } from "src/app/helpers/interfaces/user";

export class AuthDB extends DB {
  public override storage: UserDB[];
  constructor(storage: UserDB[]) {
    super();
    this.storage = storage;
  }
  public override get(name: string): UserDB | undefined {
    return this.storage.find(user => user.login === name);
  }
  public override post(data: UserDB): void {
    this.storage.push(data);
  }
  public override delete(name: string): void {
    const index = this.storage.findIndex(user => user.login === name);
    this.storage.splice(index, 1);
  }
  public override put(name: string, data: UserDB): void {
    const index = this.storage.findIndex(user => user.login === name);
    this.storage.splice(index, 1, data)
  }
}

export class AuthDBCheck extends DBCheck {
  public override storage: UserDB[];
  constructor(storage: UserDB[]) {
    super();
    this.storage = storage;
  }
  public override checkItem(user: UserForm): Observable<UserResponseSuccess> {
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