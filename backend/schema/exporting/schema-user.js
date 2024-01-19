const {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList, GraphQLInputObjectType} = require('graphql');
const {lessonType, lessonInput} = require('./shema-lesson');

const userType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {type: GraphQLID},
    email: {type: GraphQLString},
    password: {type: GraphQLString},
    firstName: {type: GraphQLString},
    lastName: {type: GraphQLString},
    patronymic: {type: GraphQLString},
    role: {type: GraphQLString},
    class: {type: GraphQLString},
    lessons: {type: new GraphQLList(lessonType)},
    teachLesson: {type: GraphQLString}
  })
});

const userAuthorizedType = new GraphQLObjectType({
  name: 'UserAuthorized',
  fields: () => ({
    id: {type: GraphQLID},
    token: {type: GraphQLString}
  })
});

const userInput = new GraphQLInputObjectType({
  name: 'UserInput',
  fields: {
    email: {type: GraphQLString},
    password: {type: GraphQLString},
    firstName: {type: GraphQLString},
    lastName: {type: GraphQLString},
    patronymic: {type: GraphQLString},
    role: {type: GraphQLString},
    class: {type: GraphQLString},
    lessons: {type: new GraphQLList(lessonInput)},
    teachLesson: {type: GraphQLString}
  }
});

const userLoginInput = new GraphQLInputObjectType({
  name: 'UserLogin',
  fields: {
    email: {type: GraphQLString},
    password: {type: GraphQLString}
  }
});

module.exports = {
  userType,
  userAuthorizedType,
  userInput,
  userLoginInput
};