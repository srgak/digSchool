import { GraphQLObjectType } from "graphql";
import { getUserList, getUser } from "./query-users";

export const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    getUserList,
    getUser
  }
});