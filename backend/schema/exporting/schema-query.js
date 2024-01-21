const {GraphQLObjectType, GraphQLList, GraphQLID, GraphQLInputObjectType, GraphQLString} = require('graphql');
const { userType, userFilterInput } = require('./schema-user');
const userDB = require('../../db/users.db');

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

module.exports = query;