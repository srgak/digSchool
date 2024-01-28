import bcrypt from 'bcrypt';
import { GraphQLError } from "graphql";
import { UserAuth, UserData } from '../interfaces/user';
import { incorrectLogin } from '../errors/errors';

class Auth {
  private bcrypt: typeof bcrypt = bcrypt; 
  private salt: string = this.bcrypt.genSaltSync(10);

  generatePassword(password: string): string {
    return this.bcrypt.hashSync(password, this.salt);
  }

  validateUser(inputUser: UserAuth, dbUser?: UserData): void {
    const isValid = dbUser ? this.bcrypt.compareSync(inputUser.password, dbUser.password) : false;
    
    if(!isValid) {
      throw new GraphQLError(incorrectLogin.message, {
        extensions: {
          status: incorrectLogin.status
        }
      });
    }
  }
}

export default Auth;