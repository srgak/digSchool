import { GraphQLObjectType, GraphQLID } from "graphql";
import { userType, userAuthorizedType, userInput, userLoginInput } from "./schema-user";
import userDB from "../../db/users.db";

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createUser: {
      type: userType,
      args: {
        input: {type: userInput}
      },
      resolve(parent, args) {
        return userDB.createUser(args.input);
      }
    },
    login: {
      type: userAuthorizedType,
      args: {
        input: {type: userLoginInput}
      },
      resolve(parent, args) {
        return userDB.login(args.input);
      }
    },
    editUser: {
      type: userType,
      args: {
        input: {type: userInput}
      },
      resolve(parent, args) {
        return userDB.editUser(args.input);
      }
    },
    deleteUser: {
      type: GraphQLID,
      args: {
        id: {type: GraphQLID}
      },
      resolve(parent, args) {
        return userDB.deleteUser(args.id);
      }
    }
  }
});

export default mutation;