import { GraphQLObjectType } from "graphql";
import { getUserList, getUser } from "./query-users";
import { getMarksByLesson } from "./query-marks";

export const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    getUserList,
    getUser,
    getMarksByLesson
  }
});