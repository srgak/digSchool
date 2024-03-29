import { GraphQLError } from 'graphql';
import { TotalData } from '../interfaces/main';
import { FileManager } from './file-manager';
import { errorMapperQL, errorMapperREST } from '../helpers/error-mapper';
import { ErrorData } from '../interfaces/error';

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

  protected triggerError(type: string, isRest = false): GraphQLError | ErrorData {
    return isRest ? errorMapperREST(type) : errorMapperQL(type);
  }
}
