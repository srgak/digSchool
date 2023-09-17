import { ResponseDB } from "./db";

interface UserId {
  id: number;
}
interface UserData {
  login: string;
  password: string;
}
export interface UserForm extends UserData {}
export interface UserDB extends UserId, UserData {}
export interface UserResponseSuccess extends ResponseDB, UserId {}