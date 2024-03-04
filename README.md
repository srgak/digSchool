# DigitalSchool

Приложение электронного журнала и дневника со встроенной админ. панелью.

## Быйстрый старт

1. Склонировать репозиторий
2. Выполнить npm i --force
3. Выполнить npm run start, либо по отдельности:

- фронт - выполнить npm run front:start
- бэк - выполнить npm run back:start

4. После запуска потыкать приложение можно по http://localhost:4200/

## Стэк

В качестве рабочего пространства используется nx workspace с необходимыми плагинами

### frontend

- Angular v17.1.0 (мигрировал с 15.2.6)
- less, tailwind
- rxjs
- graphql apollo, rest API
- ngrx

### backend

- nodejs + express + typescript
- express-graphql

## Тестовые данные для входа

| Роль    | Логин           | Пароль    |
| ------- | --------------- | --------- |
| админ   | srgak@mail.ru   | doshik    |
| учитель | teacher@mail.ru | test      |
| ученик  | pupil@test.ru   | hlebushek |

## TODO backend

- [x] добавить мутацию editUser
- [x] реализовать проверку jwt (токен авторизации)
- [x] реализовать систему работы с оценками
- [x] переписать схему со строковых литералов на объектный подход (?)
- [x] добавить фильтрацию пользователей по ролям teacher, pupil и др.
- [x] добавить мутацию deleteUser
- [x] реализовать отправку ошибки на frontend
- [x] переписать всё на typecript (!)
- [x] добавить фильтрацию учеников и учителей по классу и предмету соответственно
- [ ] прикрутить БД (?) (mongoDB, postgreSQL, ...)
- [ ] вынести настройки по приложению в БД и настроить взаимодействие
- [ ] сделать схему работы всей логики
- [ ] переписать формат данных для оценок + переделать логику

## TODO frontend

- [x] скорректировать логику работы с graphql под новонаписанный бэк
- [ ] написать функционал взаимодействия с бэком по работе с оценками
- [x] удалить плагины с бэковской логикой по rest и graphql
- [ ] вынести в отдельный компонент форму авторизации (?)
- [x] изменить функционал поля пароль для формы создания/редактирования пользователя
- [ ] адаптивная вёрстка
- [x] заменить SimpleObject на Record<T, U>
- [ ] переделать интерфейс дневника для ученика
- [ ] переделать нитерфейс журнала для учителя
- [x] пофиксить ошибку с меню после авторизации
- [ ] сделать схему работы всей логики
- [ ] добавить stylelinter

## TODO общее

- [x] перенести front и back части на nx workspace (монорепа)
- [x] добавить linter
- [ ] проверить работу с оценками(!)
- [ ] скорректировать версии пакетов
- [x] реализовать git husky
- [x] вынести общие интерфейсы в отдельную библиотеку

## Дополнительно по nx

### Nx plugins and code generators

Add Nx plugins to leverage their code generators and automated, inferred tasks.

```
# Add plugin
npx nx add @nx/react

# Use code generator
npx nx generate @nx/react:app demo

# Run development server
npx nx serve demo

# View project details
npx nx show project demo --web
```

Run `npx nx list` to get a list of available plugins and whether they have generators. Then run `npx nx list <plugin-name>` to see what generators are available.

Learn more about [code generators](https://nx.dev/features/generate-code) and [inferred tasks](https://nx.dev/concepts/inferred-tasks) in the docs.

### Running tasks

To execute tasks with Nx use the following syntax:

```
npx nx <target> <project> <...options>
```

You can also run multiple targets:

```
npx nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
npx nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/features/run-tasks).

### Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/nx-cloud/features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

### Explore the project graph

Run `npx nx graph` to show the graph of the workspace.
It will show tasks that you can run with Nx.

- [Learn more about Exploring the Project Graph](https://nx.dev/core-features/explore-graph)

### Черновики

#### Черновик №1 - новый формат данных оценок

```json
  "marks":[
    {
      "id":3,
      "data": [
        {
          "lessonName": "Математика",
          "date":"06.10.2023",
          "value":5,
          "description":"Тема урока",
          "type":"Ответ у доски"
        },
        {
          "lessonName": "Математика",
          "date":"06.10.2023",
          "value":2,
          "description":"Проверка ДЗ",
          "type":"Домащнее задание"
        },
        {
          "lessonName": "Информатика",
          "date":"06.10.2023",
          "value":5,
          "description":"Тема урока",
          "type":"Контрольная работа"
        }
      ]
    },
    {
      "id": 0,
      "data": []
    },
    {
      "id": 1,
      "data": []
    }
  ]
```

#### Черновик №2 - хлебные крошки

##### Первичная логика запроса

```typescript
app.get('/breadcrumbs/:pageName', (req, res) => {
  res.send(req.params);
});
```

##### Формат данных

```json
"breadcrumbs": [
  {
    "pageName": "auth",
    "list": [
      {
        "name": "Авторизация"
      }
    ]
  },
  {
    "pageName": "control-panel-create",
    "list": [
      {
        "name": "Панель управления",
        "link": "control-panel"
      },
      {
        "name": "Создание"
      }
    ]
  },
  {
    "pageName": "control-panel-edit",
    "list": [
      {
        "name": "Панель управления",
        "link": "control-panel"
      },
      {
        "name": "Редактирование"
      }
    ]
  },
  {
    "pageName": "control-panel",
    "list": [
      {
        "name": "Панель управления"
      }
    ]
  },
  {
    "pageName": "diary",
    "list": [
      {
        "name": "Дневник"
      }
    ]
  },
  {
    "pageName": "journal-marks",
    "list": [
      {
        "name": "Журнал",
        "link": "journal"
      },
      {
        "name": "Оценки",
        "link": "marks"
      }
    ]
  },
  {
    "pageName": "journal",
    "list": [
      {
        "name": "Журнал"
      }
    ]
  },
  {
    "pageName": "main",
    "list": [
      {
        "name": "Главная"
      }
    ]
  }
]
```
