import { map, OperatorFunction } from 'rxjs';

export const pipeValObj = <T>(paramName: string): OperatorFunction<Record<string, T>, string> => {
  return (source$) =>
    source$.pipe(
      map((data) => {
        if (!(paramName in data)) {
          throw new Error(`Свойство ${paramName} отсутствует в целевом объекте`);
        }

        return data[paramName] as string;
      }),
    );
};
