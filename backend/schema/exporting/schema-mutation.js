const mutation = `
  type Mutation {
    createUser(input: UserInput): User,
    login(input: UserLogin): UserAuthorized
  }
`;

module.exports = mutation;