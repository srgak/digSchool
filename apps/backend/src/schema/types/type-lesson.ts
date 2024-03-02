import { GraphQLInputObjectType, GraphQLObjectType, GraphQLString } from 'graphql';

export const lessonType = new GraphQLObjectType({
  name: 'Lesson',
  fields: (): Record<string, any> => ({
    name: { type: GraphQLString },
    teacher: { type: GraphQLString },
  }),
});

export const lessonInput = new GraphQLInputObjectType({
  name: 'LessonInput',
  fields: {
    name: { type: GraphQLString },
    teacher: { type: GraphQLString },
  },
});
