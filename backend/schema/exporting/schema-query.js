const {GraphQLObjectType, GraphQLList, GraphQLID} = require('graphql');
const { userType } = require('./schema-user');
const userDB = require('../../db/users.db');

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    getAllUsers: {
      type: new GraphQLList(userType),
      resolve() {
        return userDB.getAllUsers();
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

module.exports = query;