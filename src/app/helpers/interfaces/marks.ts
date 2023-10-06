import { UserId } from "./user";

export interface Mark {
  nameLesson: string;
  info: {
    date: Date;
    value: number;
    description: string;
    type: string;
  }[]
}
export interface MarksData extends UserId {
  data: Mark[];
}