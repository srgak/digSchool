import { GraphQLSchema } from 'graphql';
import { query } from './query/query-main';
import { mutation } from './mutations/mutation-main';

export const schema = new GraphQLSchema({
  query,
  mutation,
});
