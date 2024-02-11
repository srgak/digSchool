import { GraphQLID, GraphQLInputObjectType, GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";

export const markType = new GraphQLObjectType({
  name: 'Mark',
  fields: () => ({
    id: {type: GraphQLID},
    data: {type: new GraphQLList(markDataType)}
  })
});

export const markDataType = new GraphQLObjectType({
  name: 'MarkData',
  fields: () => ({
    nameLesson: {type: GraphQLString},
    info: {type: new GraphQLList(markDataInfoType)}
  })
});

export const markDataInfoType = new GraphQLObjectType({
  name: 'MarkDataInfo',
  fields: () => ({
    date: {type: GraphQLString},
    value: {type: GraphQLInt},
    description: {type: GraphQLString},
    type: {type: GraphQLString}
  })
});

export const markInput = new GraphQLInputObjectType({
  name: 'MarkInput',
  fields: () => ({
    id: {type: GraphQLID},
    data: {type: new GraphQLList(markDataInput)}
  })
});

const markDataInput = new GraphQLInputObjectType({
  name: 'MarkDataInput',
  fields: () => ({
    nameLesson: {type: GraphQLString},
    info: {type: new GraphQLList(markDataInfoInput)}
  })
});

export const markDataInfoInput = new GraphQLInputObjectType({
  name: 'MarkDataInfoInput',
  fields: () => ({
    date: {type: GraphQLString},
    value: {type: GraphQLInt},
    description: {type: GraphQLString},
    type: {type: GraphQLString}
  })
});

