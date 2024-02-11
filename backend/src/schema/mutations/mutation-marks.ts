import { GraphQLFieldConfig, GraphQLID, GraphQLList, GraphQLString } from "graphql";
import { markDataInfoInput, markDataInfoType, markDataType, markInput, markType } from "../exporting/schema-mark";
import { markDB } from "../../db/marks.db";
import userDB from "../../db/users.db";
import { lessonInput } from "../exporting/schema-lesson";

export const createMarks: GraphQLFieldConfig<any, any> = {
  type: markType,
  args: {
    userId: {type: GraphQLID},
    input: {type: markInput}
  },
  resolve(parent, args) {
    const mark = markDB.createItem(args.input);
    const user = userDB.getUser(args.userId);

    user.markId = mark.id;
    userDB.editUser(user);
  }
};

export const addMarkInfo: GraphQLFieldConfig<any, any> = {
  type: markDataInfoType,
  args: {
    markId: {type: GraphQLID},
    nameLesson: {type: GraphQLString},
    input: {type: markDataInfoInput}
  },
  resolve(parent, args) {
    return markDB.addMarkInfo(
      args.markId,
      args.nameLesson,
      args.input
    );
  }
};

export const editMarksLessons: GraphQLFieldConfig<any, any> = {
  type: new GraphQLList(markDataType),
  args: {
    markId: {type: GraphQLID},
    input: {type: new GraphQLList(lessonInput)}
  },
  resolve(parent, args) {
    return markDB.editMarkLessons(
      args.markId,
      args.input
    );
  }
};