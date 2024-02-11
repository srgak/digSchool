import fs from 'fs';
import { TotalData } from '../interfaces/main';

class FileManager {
  private fs: typeof fs = fs;
  private path: string;

  constructor(path: string) {
    this.path = path;
  }

  get data(): TotalData {
    let data = this.fs.readFileSync(
      this.path,
      {
        encoding: 'utf-8'
      }
    );

    return data ? JSON.parse(data) : {};
  }

  set data(value: TotalData) {
    this.fs.writeFileSync(
      this.path,
      JSON.stringify(value)
    );
  }
}

export default FileManager;