import { GraphQLError } from 'graphql';
import { defaultError, elementNotFound, userNotFound } from '../errors/errors';
import { ErrorData } from '../interfaces/error';

export const errorMapperQL = (type: string): GraphQLError => {
  switch (type) {
    case 'not_found': {
      return new GraphQLError(elementNotFound.message, null, null, null, null, null, {
        status: elementNotFound.status,
      });
    }
    case 'user_not_found': {
      return new GraphQLError(userNotFound.message, null, null, null, null, null, {
        status: userNotFound.status,
      });
    }
    default: {
      return new GraphQLError('ошибка');
    }
  }
};

export const errorMapperREST = (type: string): ErrorData => {
  switch (type) {
    case 'not_found': {
      return elementNotFound;
    }
    case 'user_not_found': {
      return userNotFound;
    }
    default: {
      return defaultError;
    }
  }
};
