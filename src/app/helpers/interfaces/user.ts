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

export interface UserData extends UserId {
  firstName: string;
  lastName: string;
  patronymic: string;
  role: string;
}

export interface RoleData {
  name: string;
  value: string;
}