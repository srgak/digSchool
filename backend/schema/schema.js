const {buildSchema} = require('graphql');
const typeUser = require('./types/schema-type-user');
const schema = buildSchema(`
  ${typeUser}
  
  input UserInput {
    id: ID,
    userName: String!
  }

  type Query {
    getAllUsers: [User],
    getUser(id: ID): User
  }
  type Mutation {
    createUser(input: UserInput): User
  }
`);

module.exports = schema;