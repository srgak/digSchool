const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const cors = require('cors');
const schema = require('./schema/schema');
const app = express();

app.use(cors());
app.use('/graphql', graphqlHTTP((req) => {
  //TODO: реализация проверки токена
  console.log(req.headers.authorization);

  return {
    graphiql: true,
    schema
  }
}));

app.listen(4000, () => console.log('start'));
