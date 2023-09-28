interface UserId {
  id: number;
}
interface UserAuth {
  email: string;
  password: string;
}
export interface UserAuthForm extends UserAuth {}
// export interface UserAuthCheck extends UserId {
//   email: string;
// }

export interface ClassData {
  number: number;
  letter: string;
}
interface Person extends UserId {
  firstName: string;
  lastName: string;
  patronymic: string;
  role: string;
}
interface Admin extends Person {}
interface Teacher extends Person {
  lesson: string;
}
interface Pupil extends Person {
  class?: ClassData
}
export interface UserData extends Admin, Teacher, Pupil, UserAuth {}
export interface UserAuthResponse {
  accessToken: string;
  user: UserData;
}

export interface RoleData {
  name: string;
  value: string;
}

export interface SubjectData {
  name: string;
  teacher: string;
}