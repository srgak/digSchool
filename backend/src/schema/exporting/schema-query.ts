import { GraphQLObjectType, GraphQLList, GraphQLID, } from "graphql";
import { userType, userFilterInput } from "./schema-user";
import userDB from "../../db/users.db";

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    getUserList: {
      type: new GraphQLList(userType),
      args: {
        filter: {type: userFilterInput}
      },
      resolve(parent, {filter}) {
        return userDB.getUserList(filter);
      }
    },
    getUser: {
      type: userType,
      args: {
        id: {type: GraphQLID}
      },
      resolve(parent, args) {
        return userDB.getUser(args.id);
      }
    }
  }
});

export default query