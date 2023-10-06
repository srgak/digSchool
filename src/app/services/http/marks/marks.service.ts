import { Injectable } from '@angular/core';
import { HttpMain } from '../http';
import { Observable } from 'rxjs';
import { MarksData } from 'src/app/helpers/interfaces/marks';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class MarksService extends HttpMain {
  public getMarks(id: number): Observable<MarksData> {
    return this.http.get<MarksData>(`${environments.apiUrl}marks/${id}`);
  }
}
