import { GraphQLObjectType, GraphQLString, GraphQLInputObjectType } from "graphql";

const lessonType = new GraphQLObjectType({
  name: 'Lesson',
  fields: () => ({
    name: {type: GraphQLString},
    teacher: {type: GraphQLString}
  })
});

const lessonInput = new GraphQLInputObjectType({
  name: 'LessonInput',
  fields: {
    name: {type: GraphQLString},
    teacher: {type: GraphQLString}
  }
});

export {
  lessonType,
  lessonInput
}