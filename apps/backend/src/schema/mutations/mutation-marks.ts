import { GraphQLFieldConfig, GraphQLID, GraphQLList, GraphQLString } from 'graphql';
import {
  markDataInfoInput,
  markDataInfoType,
  markDataType,
  markInput,
  markType,
} from '../types/type-mark';
import { markDB } from '../../db/marks.db';
import { userDB } from '../../db/users.db';
import { lessonInput } from '../types/type-lesson';

export const createMarks: GraphQLFieldConfig<any, any> = {
  type: markType,
  args: {
    userId: { type: GraphQLID },
    input: { type: markInput },
  },
  resolve(_, args) {
    const mark = markDB.createItem(args.input);
    const user = userDB.getItem(args.userId);

    user.markId = mark.id;
    userDB.editItem(user);
  },
};

export const addMarkInfo: GraphQLFieldConfig<any, any> = {
  type: markDataInfoType,
  args: {
    input: { type: markDataInfoInput },
    markId: { type: GraphQLID },
    nameLesson: { type: GraphQLString },
  },
  resolve(_, args) {
    return markDB.addMarkInfo(args.input, {
      markId: args.markId,
      nameLesson: args.nameLesson,
    });
  },
};

export const editMarksLessons: GraphQLFieldConfig<any, any> = {
  type: new GraphQLList(markDataType),
  args: {
    markId: { type: GraphQLID },
    input: { type: new GraphQLList(lessonInput) },
  },
  resolve(_, args) {
    return markDB.editMarkLessons(args.markId, args.input);
  },
};
