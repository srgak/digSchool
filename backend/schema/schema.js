const {buildSchema} = require('graphql');
const typeUser = require('./types/schema-type-user');
const schema = buildSchema(`
  ${typeUser}

  type UserAuthorized {
    id: ID!
    token: String!,
  }
  
  input UserInput {
    id: ID,
    email: String!,
    password: String!
  }

  input UserLogin {
    email: String!,
    password: String!
  }

  type Query {
    getAllUsers: [User],
    getUser(id: ID): User
  }

  type Mutation {
    createUser(input: UserInput): User,
    login(input: UserLogin): UserAuthorized
  }
`);

module.exports = schema;