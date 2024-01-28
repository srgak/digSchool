import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList, GraphQLInputObjectType } from "graphql";
import { lessonType, lessonInput } from "./schema-lesson";

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
    accessToken: {type: GraphQLString}
  })
});

const userInput = new GraphQLInputObjectType({
  name: 'UserInput',
  fields: {
    id: {type: GraphQLID},
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

const userFilterInput = new GraphQLInputObjectType({
  name: 'UsersFilterInput',
  fields: {
    role: {type: GraphQLString},
    class: {type: GraphQLString},
    teachLesson: {type: GraphQLString}
  }
});

export {
  userType,
  userAuthorizedType,
  userInput,
  userLoginInput,
  userFilterInput
}