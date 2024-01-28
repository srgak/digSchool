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
type UserDataAnyValue = string | number | LessonData[] | undefined;
export interface UserData extends Admin, Teacher, Pupil, UserAuth, Record<string, UserDataAnyValue> {}
export interface UserAuthResponse extends UserId {
  accessToken: string;
}
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