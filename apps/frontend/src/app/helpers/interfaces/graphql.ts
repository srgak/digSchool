import { MarkValue } from './marks';
import { UserAuthResponse, UserData } from './user';

export interface GraphQLUserAuth {
  login: UserAuthResponse;
}
export interface GraphQLUser {
  getUser: UserData;
}
export interface GraphQLUserList {
  getUserList: UserData[];
}
export interface GraphQLUserDelete {
  deleteUser: UserData;
}
export interface GraphQLUserUpdate {
  editUser: UserData;
}
export interface GraphQlUserCreate {
  createUser: UserData;
}
export interface GraphQLMarksInfoList {
  getMarksByLesson: MarkValue[];
}
