import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Mark, MarkValue } from 'src/app/helpers/interfaces/marks';

@Injectable({
  providedIn: 'root'
})
export class MarksDataService {
  public currentMarks$!: Observable<MarkValue[] | undefined>;
  public data$!: Observable<Mark[]>;

  public getCurrentMarks(nameLesson: string): Observable<MarkValue[] | undefined> {
    return this.data$
      .pipe(
        map(marks => marks.find(item => item.nameLesson === nameLesson)?.info)
      )
  }
}
