const user = `
  type User {
    id: ID,
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    patronymic: String,
    role: String,
    class: String,
    lessons: [Lesson],
    teachLesson: String
  }
`;

const userAuthorized = `
  type UserAuthorized {
    id: ID!
    token: String!,
  }
`;

const userInput = `
  input UserInput {
    email: String!,
    password: String!,
    firstName: String!,
    lastName: String!,
    patronymic: String!,
    role: String!,
    class: String,
    lessons: [LessonInput],
    teachLesson: String
  }
`;

const userLoginInput = `
  input UserLogin {
    email: String!,
    password: String!
  }
`;

module.exports = {
  user,
  userAuthorized,
  userInput,
  userLoginInput
};