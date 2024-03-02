import { GraphQLFieldConfig, GraphQLID } from 'graphql';
import { userAuthorizedType, userInput, userLoginInput, userType } from '../types/type-user';
import { userDB } from '../../db/users.db';

export const createUser: GraphQLFieldConfig<any, any> = {
  type: userType,
  args: {
    input: { type: userInput },
  },
  resolve(_, args) {
    return userDB.createItem(args.input);
  },
};

export const login: GraphQLFieldConfig<any, any> = {
  type: userAuthorizedType,
  args: {
    input: { type: userLoginInput },
  },
  resolve(_, args) {
    return userDB.login(args.input);
  },
};

export const editUser: GraphQLFieldConfig<any, any> = {
  type: userType,
  args: {
    input: { type: userInput },
  },
  resolve(_, args) {
    return userDB.editItem(args.input);
  },
};

export const deleteUser: GraphQLFieldConfig<any, any> = {
  type: GraphQLID,
  args: {
    id: { type: GraphQLID },
  },
  resolve(_, args) {
    return userDB.deleteItem(args.id);
  },
};
