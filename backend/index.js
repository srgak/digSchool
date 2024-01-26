const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const cors = require('cors');
const schema = require('./schema/schema');
const app = express();

app.use(cors());
app.use('/graphql', graphqlHTTP((req, res) => {
  //TODO: реализация проверки токена
  console.log(req.headers.authorization);

  return {
    graphiql: true,
    schema,
    customFormatErrorFn: err => {
      const {status} = err.extensions;

      res.status(status);

      return {
        message: err.message
      };
    }
  }
}));

app.listen(4000, () => console.log('start'));
