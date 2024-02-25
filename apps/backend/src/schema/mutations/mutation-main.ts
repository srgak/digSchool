import { GraphQLObjectType } from "graphql";
import { createUser, login, editUser, deleteUser } from "./mutation-users";
import { createMarks, addMarkInfo, editMarksLessons } from "./mutation-marks";

export const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createUser,
    login,
    editUser,
    deleteUser,
    createMarks,
    addMarkInfo,
    editMarksLessons
  }
});