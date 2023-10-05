import { TestBed } from '@angular/core/testing';

import { HttpUsersService } from './http-users.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserData } from 'src/app/helpers/interfaces/user';
import { environments } from 'src/environments/environments';

describe('HttpUsersService', () => {
  let service: HttpUsersService;
  let httpTestingController: HttpTestingController;
  const mockData: UserData[] = [
    {
      "email": "srgak@mail.ru",
      "password": "test",
      "id": 1,
      "firstName": "Админ",
      "lastName": "Админов",
      "patronymic": "Админович",
      "role": "admin"
    },
    {
      "email": "teacher@mail.ru",
      "password": "test2",
      "firstName": "Татьяна",
      "lastName": "Петрова",
      "patronymic": "Сергеевна",
      "role": "teacher",
      "id": 2
    }
  ];
  const targetId = 2;
  const findUser = (arr: UserData[]): UserData => arr.find(item => item.id == targetId) as UserData;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpUsersService]
    });

    service = TestBed.inject(HttpUsersService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(async () => {
    httpTestingController.verify();
  });

  it('Создать сервис', () => {
    expect(service).toBeTruthy();
  });

  it('Получить пользователя по id', () => {
    service.getUserData(targetId)
      .subscribe(data => {
        expect(data).toEqual(
          findUser(mockData)
        );
      });

    const req = httpTestingController.expectOne(`${environments.apiUrl}users/${targetId}`);
    expect(req.request.method).toBe('GET');
    req.flush(findUser(mockData));
  });

  it('Получить всех пользователей', () => {
    service.getUserList()
      .subscribe(data => {
        expect(data).toEqual(mockData);
      });

    const req = httpTestingController.expectOne(`${environments.apiUrl}users`);
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });

  it('Редактировать пользователя', () => {
    service.editUserData(targetId, findUser(mockData))
      .subscribe(data => {
        expect(data).toEqual(
          findUser(mockData)
        );
      });

    const req = httpTestingController.expectOne(`${environments.apiUrl}users/${targetId}`);
    expect(req.request.method).toBe('PUT');
    req.flush(findUser(mockData));
  });

  it('Удалить пользователя', () => {
    service.deleteUserData(targetId)
      .subscribe(data => {
        expect(data).toEqual({});
      });

    const req = httpTestingController.expectOne(`${environments.apiUrl}users/${targetId}`);
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });
});
