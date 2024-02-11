import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import cors from 'cors';
import { schema } from './schema/schema';

const app = express();

app.use(cors());
app.use('/graphql', (req, res) => {
  //TODO: реализация проверки токена
  console.log(req.headers.authorization);

  graphqlHTTP({
    graphiql: true,
    schema,
    customFormatErrorFn: err => {
      const {status} = err.extensions;

      res.status(status as number);

      return {
        message: err.message
      };
    }
  })(req, res)
});

app.listen(4000, () => console.log('start'));
