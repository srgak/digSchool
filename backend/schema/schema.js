const {GraphQLSchema} = require('graphql');
const query = require('./exporting/schema-query');
const mutation = require('./exporting/schema-mutation');
const schema = new GraphQLSchema({
  query: query,
  mutation: mutation
});

module.exports = schema;