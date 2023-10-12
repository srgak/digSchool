export interface UserId {
  id: number;
}
interface UserAuth {
  email: string;
  password: string;
}
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
export interface UserData extends Admin, Teacher, Pupil, UserAuth {}
export interface UserAuthResponse {
  accessToken: string;
  user: UserData;
}