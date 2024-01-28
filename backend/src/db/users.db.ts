import FileManager from "./file-manager";
import Auth from "./auth";
import * as jwt from 'jsonwebtoken';
import _ from "lodash";
import { GraphQLError } from "graphql";
import { userNotFound } from "../errors/errors";
import { TotalData, UserAuth, UserAuthResponse, UserData } from "../interfaces/user";

class UserDB {
  private fileManager: FileManager = new FileManager('db.json');
  private auth: Auth = new Auth();
  private jwt: typeof jwt = jwt;
  private lodash: _.LoDashStatic = _;

  get data(): TotalData {
    return this.fileManager.data;
  }

  set data(value: TotalData) {
    this.fileManager.data = value;
  }

  get users(): UserData[] {
    return this.data.users;
  }

  set users(value: UserData[]) {
    const data = this.data;

    data.users = value;
    this.data = data;
  }

  getUserList(filter: Record<string, string>): UserData[] {
    //TODO: реализовать фильтрацию по типам "и - and" и "или - or"
    let filteredUsers = this.users;

    if(filter) {
      Object.keys(filter).forEach(key => {
        filteredUsers = filteredUsers.filter(item => item[key] === filter[key]);
      });
    }
    return filteredUsers;
  }

  getUser(id: string): UserData {
    const user = this.data.users
      .find(user => user.id === +id);
    
    if(!user) {
      throw new GraphQLError(userNotFound.message, {
        extensions: {
          status: userNotFound.status
        }
      });
    }
    
    return user;
  }

  createUser(input: UserData): UserData {
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

  login(input: UserAuth): UserAuthResponse {
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

  editUser(input: UserData): UserData {
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
      throw new GraphQLError(userNotFound.message, {
        extensions: {
          status: userNotFound.status
        }
      });
    }

    users.splice(targetUserIndex, 1, targetUser);
    this.users = users;

    return targetUser;
  }

  deleteUser(id: string): number {
    const users = this.users;
    const userIndex = users
      .findIndex(user => user.id === +id);

    users.splice(userIndex, 1);
    this.users = users;

    return +id;
  }
}

const userDB = new UserDB();

export default userDB;