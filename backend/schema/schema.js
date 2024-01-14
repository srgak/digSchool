const {buildSchema} = require('graphql');
const {
  user,
  userAuthorized,
  userInput,
  userLoginInput
} = require('./exporting/schema-user');
const {lesson, lessonInput} = require('./exporting/shema-lesson');
const query = require('./exporting/schema-query');
const mutation = require('./exporting/schema-mutation');
const schema = buildSchema(`
  ${user}
  ${userAuthorized}
  ${lesson}
  ${userInput}
  ${lessonInput}
  ${userLoginInput}
  ${query}
  ${mutation}
`);

module.exports = schema;