import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList, GraphQLInputObjectType } from "graphql";
import { lessonType, lessonInput } from "./type-lesson";
import { markDB } from "../../db/marks.db";
import { markType } from "./type-mark";

export const userType = new GraphQLObjectType({
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
    teachLesson: {type: GraphQLString},
    marks: {
      type: markType,
      resolve(parent, args) {
        return markDB.getItem(parent.markId);
      }
    }
  })
});

export const userAuthorizedType = new GraphQLObjectType({
  name: 'UserAuthorized',
  fields: () => ({
    id: {type: GraphQLID},
    accessToken: {type: GraphQLString}
  })
});

export const userInput = new GraphQLInputObjectType({
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

export const userLoginInput = new GraphQLInputObjectType({
  name: 'UserLogin',
  fields: {
    email: {type: GraphQLString},
    password: {type: GraphQLString}
  }
});

export const userFilterInput = new GraphQLInputObjectType({
  name: 'UsersFilterInput',
  fields: {
    role: {type: GraphQLString},
    class: {type: GraphQLString},
    teachLesson: {type: GraphQLString}
  }
});