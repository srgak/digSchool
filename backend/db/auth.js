const bcrypt = require('bcrypt');

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

  validateUser(inputUser, dbUser, errorMessage) {
    const isValid = dbUser ? this.#bcrypt.compareSync(inputUser.password, dbUser.password) : false;
    
    if(!isValid) {
      throw new Error(errorMessage);
    }
  }
}

module.exports = Auth;