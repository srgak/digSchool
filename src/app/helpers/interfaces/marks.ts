import { UserId } from "./user";

interface Mark {
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