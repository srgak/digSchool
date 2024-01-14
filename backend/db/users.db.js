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

  getAllUsers() {
    return this.data.users;
  }

  getUser({id}) {
    return this.data.users
      .find(user => user.id === +id);
  }

  createUser({input}) {
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
    this.#fileManager.data = data;

    return newUser;
  }

  login({input}) {
    const {users} = this.data;
    const data = users
      .find(user => user.email === input.email);
    
    this.#auth.validateUser(input, data, 'Неправильные имя пользователя или пароль');
    const token = this.#jwt.sign({
      user: this.#lodash.pick(data, ['id', 'email'])
    }, 'secret', {
      expiresIn: '1m'
    });

    return {
      id: data.id,
      token
    };
  }
}

module.exports = UserDB;