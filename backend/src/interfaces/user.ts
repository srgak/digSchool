import { LessonData } from "./lesson";

export interface UserAuth {
  email: string;
  password: string;
}
export interface UserId {
  id: number | string;
}
export interface UserAuthResponse extends UserId {
  accessToken: string;
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
  markId?: number | string;
}
type UserDataAnyValue = string | number | LessonData[] | undefined;
export interface UserData extends Admin, Teacher, Pupil, UserAuth, Record<string, UserDataAnyValue> {}