const FileManager = require('./file-manager');

class UserDB {
  fileManager;

  constructor() {
    this.fileManager = new FileManager('db.json');
  }

  get data() {
    return this.fileManager.data;
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
      id
    };
    const {data} = this.fileManager;

    if(!data.users) {
      data.users = [];
    }
    data.users.push(newUser);
    this.fileManager.data = data;

    return newUser;
  }
}

module.exports = UserDB;