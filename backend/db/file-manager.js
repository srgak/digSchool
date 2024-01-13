const fs = require('fs');

class FileManager {
  fs;
  path;

  constructor(path) {
    this.path = path;
    this.fs = fs;
  }

  get data() {
    let data = this.fs.readFileSync(
      this.path,
      {
        encoding: 'utf-8'
      }
    );

    return data ? JSON.parse(data) : {};
  }

  set data(value) {
    this.fs.writeFileSync(
      this.path,
      JSON.stringify(value)
    );
  }
}

module.exports = FileManager;