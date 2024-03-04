import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';
import { MarksIdService } from '../../services/storage/marks-id/marks-id.service';
import { GraphqlMarksService } from '../../services/graphQL/marks/graphql-marks.service';
import { UserDataService } from '../../services/storage/user-data/user-data.service';
import { MarkInfo } from 'libs/api-interfaces/src';

export const marksLessonResolver: ResolveFn<MarkInfo[]> = (
  route: ActivatedRouteSnapshot,
): Observable<MarkInfo[]> => {
  const data: Map<string, string | number> = new Map();

  switch (route.data['role']) {
    case 'pupil':
      data.set('markId', inject(MarksIdService).prop);
      data.set('lessonName', route.paramMap.get('id') as string);
      break;
    case 'teacher': {
      const { teachLesson } = inject(UserDataService).prop;

      data.set('markId', route.paramMap.get('id') as string);
      data.set('lessonName', teachLesson || '');
      break;
    }
  }

  return inject(GraphqlMarksService).getMarksByLesson(
    data.get('markId') as number,
    data.get('lessonName') as string,
  );
};
