import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HttpTeachersService } from './http-teachers.service';
import { environments } from 'src/environments/environments';
import { UserData } from 'src/app/helpers/interfaces/user';
import { map } from 'rxjs';

describe('HttpTeachersService', () => {
  let service: HttpTeachersService;
  let httpTestingController: HttpTestingController;
  const mockData: UserData[] = [{
    "email": "test@mail.ru",
    "password": "test",
    "firstName": "Татьяна",
    "lastName": "Петрова",
    "patronymic": "Сергеевна",
    "role": "teacher",
    "teachLesson": "Математика",
    "id": 1
  },
  {
    "email": "test2@mail.ru",
    "password": "test",
    "firstName": "Иванов",
    "lastName": "Иван",
    "patronymic": "Иванович",
    "role": "teacher",
    "teachLesson": "Информатика",
    "id": 2
  }];

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpTeachersService]
    });

    service = TestBed.inject(HttpTeachersService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(async () => {
    httpTestingController.verify();
  });

  it('Создать сервис', () => {
    expect(service).toBeTruthy();
  });

  it('Получить список учителей', () => {
    service.getTeachers()
      .subscribe(data => {
        expect(data).toEqual(mockData);
      });

      const req = httpTestingController.expectOne(`${environments.apiUrl}users?role=teacher`);
      expect(req.request.method).toBe('GET');
      req.flush(mockData);
  });

  it('Получить учителя информатики', () => {
    const lesson = 'Информатика';
    const findTeacher = (arr: UserData[]): UserData => arr.find(item => item.teachLesson === lesson) as UserData;
    service.getTeachersLesson(lesson)
      .pipe(
        map(findTeacher)
      )
      .subscribe(data => {
        expect(data).toEqual(
          findTeacher(mockData)
        );
      });

    const req = httpTestingController.expectOne(`${environments.apiUrl}users?role=teacher&teachLesson=${lesson}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });
});
