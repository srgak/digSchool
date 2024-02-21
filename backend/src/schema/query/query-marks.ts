import { GraphQLFieldConfig, GraphQLID, GraphQLList, GraphQLString } from "graphql";
import { markDataInfoType } from "../types/type-mark";
import { markDB } from "../../db/marks.db";

export const getMarksByLesson: GraphQLFieldConfig<any, any> = {
  type: new GraphQLList(markDataInfoType),
  args: {
    id: {type: GraphQLID},
    lessonName: {type: GraphQLString}
  },
  resolve(parent, args) {
    return markDB.getMarksByLesson(args.id, args.lessonName);
  }
};