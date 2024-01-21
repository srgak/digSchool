const FileManager = require('./file-manager');
const Auth = require('./auth');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

class UserDB {
  #fileManager;
  #auth;
  #jwt;
  #lodash;

  constructor() {
    this.#fileManager = new FileManager('db.json');
    this.#auth = new Auth();
    this.#jwt = jwt;
    this.#lodash = _;
  }

  get data() {
    return this.#fileManager.data;
  }

  set data(value) {
    this.#fileManager.data = value;
  }

  get users() {
    return this.data.users;
  }

  set users(value) {
    const data = this.data;

    data.users = value;
    this.data = data;
  }

  getAllUsers() {
    return this.data.users;
  }

  getUser(id) {
    return this.data.users
      .find(user => user.id === +id);
  }

  createUser(input) {
    const id = Date.now();
    const newUser = {
      ...input,
      id,
      password: this.#auth.generatePassword(input.password)
    };
    const data = this.data;

    if(!data.users) {
      data.users = [];
    }
    data.users.push(newUser);
    this.data = data;

    return newUser;
  }

  login(input) {
    const {users} = this.data;
    const data = users
      .find(user => user.email === input.email);
    
    this.#auth.validateUser(input, data, 'Неправильные имя пользователя или пароль');
    const accessToken = this.#jwt.sign({
      user: this.#lodash.pick(data, ['id', 'email'])
    }, 'secret', {
      expiresIn: '1m'
    });

    return {
      id: data.id,
      accessToken
    };
  }

  editUser(input) {
    const users = this.users;
    let targetUser;
    let targetUserIndex;

    input.id = +input.id;
    if('password' in input) {
      input.password = this.#auth.generatePassword(input.password);
    }
    targetUser = users.find((user, index) => {
      if(user.id === input.id) {
        targetUserIndex = index;
        return true;
      }
      return false;
    });
    targetUser = {...targetUser, ...input};
    users.splice(targetUserIndex, 1, targetUser);
    this.users = users;

    return targetUser;
  }

  deleteUser(id) {
    const users = this.users;
    const userIndex = users
      .findIndex(user => user.id === +id);

    users.splice(userIndex, 1);
    this.users = users;

    return id;
  }
}

const userDB = new UserDB();

module.exports = userDB;