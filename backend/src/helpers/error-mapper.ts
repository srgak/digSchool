import { GraphQLError } from "graphql";
import { elementNotFound, userNotFound } from "../errors/errors";

export const errorMapper = (type: string): GraphQLError => {
  switch (type) {
    case 'not_found': {
      return new GraphQLError(elementNotFound.message, {
        extensions: {
          status: elementNotFound.status
        }
      })
    }
    case 'user_not_found': {
      return new GraphQLError(userNotFound.message, {
        extensions: {
          status: userNotFound.status
        }
      })
    }
    default: {
      return new GraphQLError('ошибка');
    }
  }
}