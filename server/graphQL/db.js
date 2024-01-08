module.exports = {
  users: [
    {
      id: 1,
      firstName: 'Админ',
      lastName: 'Админов',
      patronymic: 'Админович',
      role: 'admin',
    },
    {
      id: 2,
      firstName: 'Татьяна',
      lastName: 'Петрова',
      patronymic: 'Сергеевна',
      role: 'teacher',
      teachLesson: 'Математика',
    },
    {
      id: 3,
      firstName: 'Петров',
      lastName: 'ПЁтр',
      patronymic: 'Петрович',
      role: 'pupil',
      class: '5Б',
      lessons: [
        {
          name: 'Математика',
          teacher: 'Татьяна'
        }
      ],
    },
    {
      id: 4,
      firstName: 'Тест1',
      lastName: 'Тестов1',
      patronymic: 'Тестович1',
      role: 'pupil',
      class: '1А',
      lessons: [
        {
          name: 'Математика',
          teacher: 'Татьяна'
        }
      ],
    },
    {
      id: 5,
      firstName: 'Тест2',
      lastName: 'Тестов2',
      patronymic: 'Тестович2',
      role: 'pupil',
      class: '2А',
      lessons: [
        {
          name: 'Математика',
          teacher: 'Татьяна'
        }
      ],
    },
    {
      id: 6,
      firstName: 'Тест3',
      lastName: 'Тестов3',
      patronymic: 'Тестович3',
      role: 'teacher',
    }
  ]
}