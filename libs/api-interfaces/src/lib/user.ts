import { LessonData } from './lesson';
import { MarksData } from './marks';

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
type Admin = Person;
interface Teacher extends Person {
  teachLesson?: string;
}
interface Pupil extends Person {
  class?: string;
  lessons?: LessonData[];
  markId?: number | string;
  marks?: MarksData;
}
type UserDataAnyValue = string | number | LessonData[] | MarksData | undefined;
export interface UserData
  extends Admin,
    Teacher,
    Pupil,
    UserAuth,
    Record<string, UserDataAnyValue> {}
