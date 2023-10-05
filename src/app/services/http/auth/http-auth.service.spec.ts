import { TestBed } from '@angular/core/testing';

import { HttpAuthService } from './http-auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserAuthForm, UserAuthResponse, UserData } from 'src/app/helpers/interfaces/user';
import { environments } from 'src/environments/environments';
import { SimpleObject } from 'src/app/helpers/interfaces/common';

describe('HttpAuthService', () => {
  let service: HttpAuthService;
  let httpTestingController: HttpTestingController;
  const mockUser: UserData = {
    "email": "test@test.ru",
    "password": "test",
    "firstName": "Тест",
    "lastName": "Тестов",
    "patronymic": "Тестович",
    "role": "teacher",
    "id": 1
  };
  const mockToken: string = 'testToken';
  const mockResponse: UserAuthResponse = {
    accessToken: mockToken,
    user: mockUser
  };
  const mockAuth: UserAuthForm = {
    email: 'test@test.ru',
    password: 'test'
  };
  const mockAuthStatus: SimpleObject<string> = {
    status: 'success'
  };

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpAuthService]
    });

    service = TestBed.inject(HttpAuthService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(async () => {
    httpTestingController.verify();
  });

  it('Создать сервис', () => {
    expect(service).toBeTruthy();
  });

  it('Зарегистрировать пользователя', () => {
    service.register(mockUser)
      .subscribe(data => {
        expect(data).toEqual(mockResponse);
      });
    
    const req = httpTestingController.expectOne(`${environments.apiUrl}register`);
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);
  });

  it('Залогиниться', () => {
    service.login(mockAuth)
      .subscribe(data => {
        expect(data).toEqual(mockResponse)
      });
  
    const req = httpTestingController.expectOne(`${environments.apiUrl}login`);
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);
  });

  it('Проверка авторизованного пользователя', () => {
    service.checkAuth(mockToken)
      .subscribe(data => {
        expect(data).toEqual(mockAuthStatus)
      });

    const req = httpTestingController.expectOne(`${environments.apiUrl}auth`);
    expect(req.request.method).toBe('GET');
    req.flush(mockAuthStatus);
  });
});
