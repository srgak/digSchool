const {GraphQLObjectType, GraphQLString, GraphQLInputObjectType} = require('graphql');


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

module.exports = {
  lessonType,
  lessonInput
}