# DigitalSchool

Проект работает на ангуляре версии 15.2.6. Данный проект находится в разработке.

## Быстрый старт

1. Склонировать репозиторий
2. Сделать npm i --force
3. Запуск проекта:
  * фронт - в корневой папке выполнить npm run start
  * бэк - в папке backend выполнить npm run start
4. После запуска потыкать приложение можно по http://localhost:4200/

## Тестовые данные для входа

| Роль | Логин | Пароль |
| --- | --- | --- |
| админ | srgak@mail.ru | doshik |
| учитель | teacher@mail.ru | test |
| ученик | pupil@test.ru | hlebushek |

### TODO backend
- [X] добавить мутацию editUser
- [ ] реализовать проверку jwt (токен авторизации)
- [ ] реализовать систему работы с оценками
- [X] переписать схему со строковых литералов на объектный подход (?)
- [X] добавить фильтрацию пользователей по ролям teacher, pupil и др.
- [X] добавить мутацию deleteUser
- [X] реализовать отправку ошибки на frontend
- [X] переписать всё на typecript (!)
- [X] добавить фильтрацию учеников и учителей по классу и предмету соответственно
- [ ] прикрутить БД (?) (mongoDB, postgreSQL, ...)

### TODO frontend
- [ ] скорректировать логику работы с graphql под новонаписанный бэк
- [ ] написать функционал взаимодействия с бэком по работе с оценками
- [X] удалить плагины с бэковской логикой по rest и graphql
- [ ] вынести в отдельный компонент форму авторизации (?)
- [X] изменить функционал поля пароль для формы создания/редактирования пользователя
- [ ] адаптивная вёрстка
- [X] заменить SimpleObject на Record<T, U>

### TODO общее
- [ ] переработать структуру как одно fullstack приложение (монорепа?)
- [ ] добавить linter
- [ ] проверить работу с оценками(!)
- [ ] скорректировать версии пакетов