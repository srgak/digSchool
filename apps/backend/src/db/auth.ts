import bcrypt from 'bcrypt';
import { GraphQLError } from 'graphql';
import { incorrectLogin } from '../errors/errors';
import { UserAuth, UserData } from 'libs/api-interfaces/src';

export class Auth {
  private readonly bcrypt: typeof bcrypt = bcrypt;
  private readonly salt: string = this.bcrypt.genSaltSync(10);

  public generatePassword(password: string): string {
    return this.bcrypt.hashSync(password, this.salt);
  }

  public validateUser(inputUser: UserAuth, dbUser?: UserData): void {
    const isValid = dbUser ? this.bcrypt.compareSync(inputUser.password, dbUser.password) : false;

    if (!isValid) {
      throw new GraphQLError(incorrectLogin.message, null, null, null, null, null, {
        status: incorrectLogin.status,
      });
    }
  }
}
