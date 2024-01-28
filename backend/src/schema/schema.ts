import { GraphQLSchema } from "graphql";
import query from "./exporting/schema-query";
import mutation from "./exporting/schema-mutation";

const schema = new GraphQLSchema({
  query: query,
  mutation: mutation
});

export default schema;