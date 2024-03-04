import {
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import { lessonInput, lessonType } from './type-lesson';
import { markDB } from '../../db/marks.db';
import { markType } from './type-mark';
import { MarksData } from 'libs/api-interfaces/src';

export const userType = new GraphQLObjectType({
  name: 'User',
  fields: (): Record<string, any> => ({
    id: { type: GraphQLID },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    patronymic: { type: GraphQLString },
    role: { type: GraphQLString },
    class: { type: GraphQLString },
    lessons: { type: new GraphQLList(lessonType) },
    teachLesson: { type: GraphQLString },
    marks: {
      type: markType,
      resolve(parent): MarksData {
        return markDB.getItem(parent.markId);
      },
    },
  }),
});

export const userAuthorizedType = new GraphQLObjectType({
  name: 'UserAuthorized',
  fields: (): Record<string, any> => ({
    id: { type: GraphQLID },
    accessToken: { type: GraphQLString },
  }),
});

export const userInput = new GraphQLInputObjectType({
  name: 'UserInput',
  fields: {
    id: { type: GraphQLID },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    patronymic: { type: GraphQLString },
    role: { type: GraphQLString },
    class: { type: GraphQLString },
    lessons: { type: new GraphQLList(lessonInput) },
    teachLesson: { type: GraphQLString },
  },
});

export const userLoginInput = new GraphQLInputObjectType({
  name: 'UserLogin',
  fields: {
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  },
});

export const userFilterInput = new GraphQLInputObjectType({
  name: 'UsersFilterInput',
  fields: {
    role: { type: GraphQLString },
    class: { type: GraphQLString },
    teachLesson: { type: GraphQLString },
  },
});
