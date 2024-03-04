import { UserId } from './user';

export interface MarkInfo {
  date: Date;
  value: number;
  description: string;
  type: string;
}
export interface MarkLesson {
  nameLesson: string;
  info: MarkInfo[];
}
export interface MarksData extends UserId {
  id: number | string;
  data: MarkLesson[];
}
export interface MarkInfoFilter {
  markId: string;
  nameLesson: string;
}
