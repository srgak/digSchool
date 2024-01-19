const {GraphQLObjectType} = require('graphql');
const {userType, userAuthorizedType, userInput, userLoginInput} = require('./schema-user');
const userDB = require('../../db/users.db');

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
    }
  }
});

module.exports = mutation;