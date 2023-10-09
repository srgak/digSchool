import { UserId } from "./user";

export interface MarkValue {
  date: Date;
  value: number;
  description: string;
  type: string;
}
export interface Mark {
  nameLesson: string;
  info: MarkValue[];
}
export interface MarksData extends UserId {
  data: Mark[];
}