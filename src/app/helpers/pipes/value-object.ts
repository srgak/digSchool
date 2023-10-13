import { OperatorFunction, map } from "rxjs";
import { SimpleObject } from "../interfaces/common";

export const pipeValObj = <T>(paramName: string): OperatorFunction<SimpleObject<T>, string> => {
  return source$ => source$.pipe(map(data => {
    if(!(paramName in data)) {
      throw new Error(`Свойство ${paramName} отсутствует в целевом объекте`);
    }
    return data[paramName] as string;
  }));
}