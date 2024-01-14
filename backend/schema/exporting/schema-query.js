const query = `
  type Query {
    getAllUsers: [User],
    getUser(id: ID): User
  }
`;

module.exports = query;