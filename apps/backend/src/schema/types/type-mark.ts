import {
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

export const markType = new GraphQLObjectType({
  name: 'Mark',
  fields: (): Record<string, any> => ({
    id: { type: GraphQLID },
    data: { type: new GraphQLList(markDataType) },
  }),
});

export const markDataType = new GraphQLObjectType({
  name: 'MarkData',
  fields: (): Record<string, any> => ({
    nameLesson: { type: GraphQLString },
    info: { type: new GraphQLList(markDataInfoType) },
  }),
});

export const markDataInfoType = new GraphQLObjectType({
  name: 'MarkDataInfo',
  fields: (): Record<string, any> => ({
    date: { type: GraphQLString },
    value: { type: GraphQLInt },
    description: { type: GraphQLString },
    type: { type: GraphQLString },
  }),
});

export const markInput = new GraphQLInputObjectType({
  name: 'MarkInput',
  fields: (): Record<string, any> => ({
    id: { type: GraphQLID },
    data: { type: new GraphQLList(markDataInput) },
  }),
});

const markDataInput = new GraphQLInputObjectType({
  name: 'MarkDataInput',
  fields: (): Record<string, any> => ({
    nameLesson: { type: GraphQLString },
    info: { type: new GraphQLList(markDataInfoInput) },
  }),
});

export const markDataInfoInput = new GraphQLInputObjectType({
  name: 'MarkDataInfoInput',
  fields: (): Record<string, any> => ({
    date: { type: GraphQLString },
    value: { type: GraphQLInt },
    description: { type: GraphQLString },
    type: { type: GraphQLString },
  }),
});
