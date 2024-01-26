const bcrypt = require('bcrypt');
const {GraphQLError} = require('graphql');
const {incorrectLogin} = require('../errors/errors');

class Auth {
  #bcrypt;
  #salt;

  constructor() {
    this.#bcrypt = bcrypt;
    this.#salt = this.#bcrypt.genSaltSync(10);
  }

  generatePassword(password) {
    return this.#bcrypt.hashSync(password, this.#salt);
  }

  validateUser(inputUser, dbUser) {
    const isValid = dbUser ? this.#bcrypt.compareSync(inputUser.password, dbUser.password) : false;
    
    if(!isValid) {
      throw new GraphQLError(incorrectLogin.message, {
        extensions: {
          status: incorrectLogin.status
        }
      });
    }
  }
}

module.exports = Auth;