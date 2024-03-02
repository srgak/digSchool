import { GraphQLError } from 'graphql';
import { TotalData } from '../interfaces/main';
import { FileManager } from './file-manager';
import { errorMapper } from '../helpers/error-mapper';

export abstract class MainDB {
  protected readonly fileManager: FileManager = new FileManager(`${__dirname}/assets/db.json`);

  protected get data(): TotalData {
    return this.fileManager.data;
  }

  protected set data(value: TotalData) {
    this.fileManager.data = value;
  }

  public abstract getItem(id: string): unknown;

  public createItem?(input: unknown): unknown;

  public editItem?(input: unknown): unknown;

  public deleteItem?(input: unknown): number;

  protected triggerError(type: string): GraphQLError {
    return errorMapper(type);
  }
}
