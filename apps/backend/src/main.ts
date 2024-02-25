import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import { schema } from './schema/schema';
import * as jwt from 'jsonwebtoken';
import { invalidToken } from './errors/errors';

const app = express();

app.use(cors());
app.use('/graphql', (req, res) => {
  console.log('req');
  const jsonwebtoken = jwt;
  const {authorization} = req.headers;

  if(authorization) {
    try {
      jsonwebtoken.verify(authorization, 'secret');
    } catch {
      const {status, message} = invalidToken;

      return res.status(status).send({
        message
      });
    }
  }

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
