import { SimpleObject } from "./common";

export interface UserId {
  id: number;
}
export interface UserAuth {
  email: string;
  password: string;
}
export interface UserLoginData extends UserAuth, UserId {}
export interface UserAuthForm extends UserAuth {}

export interface LessonData {
  name: string;
  teacher: string;
}
interface Person extends UserId {
  firstName: string;
  lastName: string;
  patronymic: string;
  role: string;
}
interface Admin extends Person {}
interface Teacher extends Person {
  teachLesson?: string;
}
interface Pupil extends Person {
  class?: string;
  lessons?: LessonData[];
}
export interface UserData extends Admin, Teacher, Pupil, UserAuth, SimpleObject<unknown> {}
export interface UserAuthResponse {
  accessToken: string;
  user: UserLoginData;
}
export interface GraphQLUser {
  User: UserData;
}
export interface GraphQLUserList {
  allUsers: UserData[];
}
export interface GraphQLUserRemove {
  removeUser: UserData;
}
export interface GraphQLUserUpdate {
  updateUser: UserData;
}
export interface GraphQlUserCreate {
  createUser: UserData;
}