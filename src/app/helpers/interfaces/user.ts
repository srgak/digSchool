import { ResponseDB } from "./db";

interface UserId {
  id: number;
}
interface UserAuth {
  login: string;
  password: string;
}
export interface UserAuthForm extends UserAuth {}
export interface UserAuthDB extends UserId, UserAuth {}
export interface UserAuthResponse extends ResponseDB, UserId {}

interface ClassData {
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
interface Teacher extends Person {}
interface Pupil extends Person {
  class?: ClassData
}
export interface UserData extends Admin, Teacher, Pupil {}

export interface RoleData {
  name: string;
  value: string;
}