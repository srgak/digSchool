import { GraphQLFieldConfig, GraphQLID, GraphQLList } from 'graphql';
import { userFilterInput, userType } from '../types/type-user';
import { userDB } from '../../db/users.db';

export const getUserList: GraphQLFieldConfig<any, any> = {
  type: new GraphQLList(userType),
  args: {
    filter: { type: userFilterInput },
  },
  resolve(_, { filter }) {
    return userDB.getUserList(filter);
  },
};

export const getUser: GraphQLFieldConfig<any, any> = {
  type: userType,
  args: {
    id: { type: GraphQLID },
  },
  resolve(_, args) {
    return userDB.getItem(args.id);
  },
};
