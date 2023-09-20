import { UserData } from "src/app/helpers/interfaces/user";
import { DB } from "../db";

export class UserDB extends DB {
  private storage: UserData[];
  constructor(storage: UserData[]) {
    super();
    this.storage = storage;
  }
  public override get(id: number): UserData | undefined {
    return this.storage.find(user => user.id === id);
  }
  public override post(data: UserData): void {
    this.storage.push(data);
  }
  public override delete(id: number): void {
    const index = this.storage.findIndex(user => user.id === id);
    this.storage.splice(index, 1);
  }
  public override put(id: number, data: UserData): void {
    const index = this.storage.findIndex(user => user.id === id);
    this.storage.splice(index, 1, data);
  }
}