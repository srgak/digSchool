import fs from 'fs';
import { TotalData } from '../interfaces/main';

export class FileManager {
  private readonly fs: typeof fs = fs;
  private readonly path: string;

  constructor(path: string) {
    this.path = path;
  }

  public get data(): TotalData {
    let data = this.fs.readFileSync(
      this.path,
      {
        encoding: 'utf-8'
      }
    );

    return data ? JSON.parse(data) : {};
  }

  public set data(value: TotalData) {
    this.fs.writeFileSync(
      this.path,
      JSON.stringify(value)
    );
  }
}