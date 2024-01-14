const lesson = `
  type Lesson {
    name: String!,
    teacher: String!
  }
`;

const lessonInput = `
  input LessonInput {
    name: String!,
    teacher: String!
  }
`;

module.exports = {
  lesson,
  lessonInput
}