import { GraphQLError } from "graphql";
import { MarkLesson, MarkInfo, MarksData, MarkInfoFilter } from "../interfaces/marks";
import { elementNotFound } from "../errors/errors";
import { MainDB } from "./main.db";
import { LessonData } from "../interfaces/lesson";

class MarkDB extends MainDB {
  public get marks(): MarksData[] {
    return this.data.marks;
  }

  public set marks(value: MarksData[]) {
    const data = this.data;

    data.marks = value;
    this.data = data;
  }

  public getItem(id: string): MarksData {
    const mark = this.marks
      .find(mark => mark.id === +id);

      if(!mark) {
      throw new GraphQLError(elementNotFound.message, null, null, null, null, null, {
        status: elementNotFound.status
      });
    }

    return mark
  }

  public createItem(input: MarksData): MarksData {
    const id = Date.now();
    const newMark = {
      ...input,
      id
    };
    const data = this.data;

    if(!data.marks) {
      data.marks = [];
    }
    data.marks.push(newMark);
    this.data = data;

    return newMark;
  }

  public editMarkLessons(markId: string, input: LessonData[]): MarkLesson[] {
    const marks = this.marks;
    const marksIndex = marks
      .findIndex(item => item.id === +markId);
    let markData = this.marks[marksIndex].data;

    if(marksIndex < 1) {
      throw new GraphQLError(elementNotFound.message, null, null, null, null, null, {
        status: elementNotFound.status
      });
    }

    const lessonList = input.map(item => item.name);

    marks[marksIndex]
      .data = input.length > markData.length
      ? this.addMarkLessons(
        markData,
        lessonList
      )
      : this.removeMarkLessons(
          markData,
          lessonList
        )
    this.marks = marks;

    return marks[marksIndex].data;
  }

  private addMarkLessons(markList: MarkLesson[], lessonList: string[]): MarkLesson[] {
    const currentLessons = markList.map(item => item.nameLesson);

    return markList.concat(
      lessonList
        .filter(item => !currentLessons.includes(item))
        .map(item => ({
          nameLesson: item,
          info: []
        }))
    );
  }

  private removeMarkLessons(markList: MarkLesson[], lessonList: string[]): MarkLesson[] {
    return markList
      .filter(item => lessonList.includes(item.nameLesson));
  }

  public addMarkInfo(input: MarkInfo, filter: MarkInfoFilter): MarkInfo {
    const marks = this.marks;
    const marksIndex = marks.findIndex(item => item.id === +filter.markId);
    const markLessonIndex = marks[marksIndex]?.data.findIndex(item => item.nameLesson === filter.nameLesson);

    if(marksIndex < 0 || markLessonIndex < 0) {
      throw this.triggerError('not_found');
    }

    marks[marksIndex]
      .data[markLessonIndex]
      .info.push(input);
    this.marks = marks;

    return input;
  }

  public getMarksByLesson(id: string, lessonName: string): MarkInfo[] {
    const mark = this.marks
      .find(mark => mark.id === +id);
    const markLesson = mark?.data.find(item => item.nameLesson === lessonName)?.info;

    if(!markLesson) {
      throw new GraphQLError(elementNotFound.message, null, null, null, null, null, {
        status: elementNotFound.status
      });
    }

    return markLesson;
  }
}

export const markDB = new MarkDB();