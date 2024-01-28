# DigitalSchool

Проект работает на ангуляре версии 15.2.6. Данный проект находится в разработке.

## Быстрый старт

1. Склонировать репозиторий
2. Сделать npm i
3. Общий запуск для разработки - npm run start:
  * запуск клиента (фронта) - npm run front
  * запуск сервера для rest - npm run server:rest
  * запуск сервера для graphQL - npm run server:graphql
4. После запуска потыкать приложение можно по http://localhost:4200/

## Тестовые данные для входа

* админ: логин srgak@mail.ru, пароль doshik
* учитель: логин teacher@mail.ru, пароль test
* ученик: логин pupil@test.ru, пароль hlebushek

### TODO backend
- [X] добавить мутацию editUser
- [ ] реализовать проверку jwt (токен авторизации)
- [ ] реализовать систему работы с оценками
- [X] переписать схему со строковых литералов на объектный подход (?)
- [ ] написать функционал работы с оценками
- [X] добавить фильтрацию пользователей по ролям teacher, pupil и др.
- [X] добавить мутацию deleteUser
- [X] реализовать отправку ошибки на frontend
- [X] переписать всё на typecript (!)
- [X] добавить фильтрацию учеников и учителей по классу и предмету соответственно

### TODO frontend
- [ ] скорректировать логику работы с graphql под новонаписанный бэк
- [ ] написать функционал взаимодействия с бэком по работе с оценками
- [ ] удалить плагины с бэковской логикой по rest и graphql
- [ ] вынести в отдельный компонент форму авторизации (?)
- [X] изменить функционал поля пароль для формы создания/редактирования пользователя
- [ ] адаптивная вёрстка
- [ ] заменить SimpleObject на Record<T, U>