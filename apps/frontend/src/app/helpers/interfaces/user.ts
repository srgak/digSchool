import { MarksData } from './marks';

export interface UserId {
  id: number;
}
export interface UserAuth {
  email: string;
  password: string;
}
export interface UserLoginData extends UserAuth, UserId {}
export type UserAuthForm = UserAuth;

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
type Admin = Person;
interface Teacher extends Person {
  teachLesson?: string;
}
interface Pupil extends Person {
  class?: string;
  lessons?: LessonData[];
  marks?: MarksData;
}
type UserDataAnyValue = string | number | LessonData[] | MarksData | undefined;
export interface UserData
  extends Admin,
    Teacher,
    Pupil,
    UserAuth,
    Record<string, UserDataAnyValue> {}
export interface UserAuthResponse extends UserId {
  accessToken: string;
}
