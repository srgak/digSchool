import { Auth } from "./auth";
import * as jwt from 'jsonwebtoken';
import _ from "lodash";
import { UserAuth, UserAuthResponse, UserData } from "../interfaces/user";
import { TotalData } from "../interfaces/main";
import { MainDB } from "./main.db";

class UserDB extends MainDB {
  private readonly auth: Auth = new Auth();
  private readonly jwt: typeof jwt = jwt;
  private readonly lodash: _.LoDashStatic = _;

  public get data(): TotalData {
    return this.fileManager.data;
  }

  public set data(value: TotalData) {
    this.fileManager.data = value;
  }

  public get users(): UserData[] {
    return this.data.users;
  }

  public set users(value: UserData[]) {
    const data = this.data;

    data.users = value;
    this.data = data;
  }

  public getUserList(filter: Record<string, string>): UserData[] {
    //TODO: реализовать фильтрацию по типам "и - and" и "или - or"
    let filteredUsers = this.users;

    if(filter) {
      Object.keys(filter).forEach(key => {
        filteredUsers = filteredUsers.filter(item => item[key] === filter[key]);
      });
    }
    return filteredUsers;
  }

  public getItem(id: string): UserData {
    const user = this.data.users
      .find(user => user.id === +id);
    
    if(!user) {
      throw this.triggerError('user_not_found')
    }
    
    return user;
  }

  public createItem(input: UserData): UserData {
    const id = Date.now();
    const newUser = {
      ...input,
      id,
      password: this.auth.generatePassword(input.password)
    };
    const data = this.data;

    if(!data.users) {
      data.users = [];
    }
    data.users.push(newUser);
    this.data = data;

    return newUser;
  }

  public login(input: UserAuth): UserAuthResponse {
    const {users} = this.data;
    const data = users
      .find(user => user.email === input.email);
    
    this.auth.validateUser(input, data);
    const accessToken = this.jwt.sign({
      user: this.lodash.pick(data, ['id', 'email'])
    }, 'secret', {
      expiresIn: '1m'
    });

    return {
      id: data?.id as number,
      accessToken
    };
  }

  public editItem(input: UserData): UserData {
    const users = this.users;
    let targetUser;
    let targetUserIndex;

    input.id = +input.id;
    if('password' in input) {
      input.password = this.auth.generatePassword(input.password);
    }
    targetUser = users.find((user, index) => {
      if(user.id === input.id) {
        targetUserIndex = index;
        return true;
      }
      return false;
    });
    targetUser = {...targetUser, ...input};

    if(!targetUserIndex) {
      throw this.triggerError('user_not_found');
    }

    users.splice(targetUserIndex, 1, targetUser);
    this.users = users;

    return targetUser;
  }

  public deleteItem(id: string): number {
    const users = this.users;
    const userIndex = users
      .findIndex(user => user.id === +id);

    users.splice(userIndex, 1);
    this.users = users;

    return +id;
  }
}

export const userDB = new UserDB();