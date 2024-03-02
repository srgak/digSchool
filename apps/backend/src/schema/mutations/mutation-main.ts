import { GraphQLObjectType } from 'graphql';
import { createUser, deleteUser, editUser, login } from './mutation-users';
import { addMarkInfo, createMarks, editMarksLessons } from './mutation-marks';

export const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createUser,
    login,
    editUser,
    deleteUser,
    createMarks,
    addMarkInfo,
    editMarksLessons,
  },
});
