import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Mark, MarkValue } from 'src/app/helpers/interfaces/marks';

@Injectable({
  providedIn: 'root'
})
export class MarksDataService {
  private _data?: Mark[];
  public currentMarks$: BehaviorSubject<MarkValue[] | null> = new BehaviorSubject<MarkValue[] | null>(null);

  public set data(data: Mark[]) {
    this._data = data;
  }

  public getCurrentMarks(nameLesson: string): void {
    this.currentMarks$.next(
      this._data?.find(item => item.nameLesson === nameLesson)?.info || null
    );
  }
}
