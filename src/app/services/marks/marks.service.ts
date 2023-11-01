import { Injectable } from '@angular/core';
import { Observable, find, from, map, switchMap } from 'rxjs';
import { Mark, MarkValue } from 'src/app/helpers/interfaces/marks';

@Injectable({
  providedIn: 'root'
})
export class MarksDataService {
  public currentMarks$!: Observable<MarkValue[]>;
  public data$!: Observable<Mark[]>;

  public getCurrentMarks(nameLesson: string): Observable<MarkValue[]> {
    return this.data$
      .pipe(
        switchMap(array => from(array)),
        find(item => item.nameLesson === nameLesson),
        map(mark => mark ? mark.info : [])
      )
  }
}
