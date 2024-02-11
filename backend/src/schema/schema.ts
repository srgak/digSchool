import { GraphQLSchema } from "graphql";
import query from "./exporting/schema-query";
import mutation from "./mutations/mutation-main";

const schema = new GraphQLSchema({
  query: query,
  mutation: mutation
});

export default schema;