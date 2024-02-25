import { GraphQLObjectType, GraphQLString, GraphQLInputObjectType } from "graphql";

export const lessonType = new GraphQLObjectType({
  name: 'Lesson',
  fields: () => ({
    name: {type: GraphQLString},
    teacher: {type: GraphQLString}
  })
});

export const lessonInput = new GraphQLInputObjectType({
  name: 'LessonInput',
  fields: {
    name: {type: GraphQLString},
    teacher: {type: GraphQLString}
  }
});