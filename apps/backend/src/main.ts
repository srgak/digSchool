import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import { schema } from './schema/schema';
import * as jwt from 'jsonwebtoken';
import { invalidToken } from './errors/errors';
import { breadcrumbsDB } from './db/breadcrumbs.db';
import { menuDB } from './db/menu.db';

const app = express();

app.use(cors());
app.use('/graphql', (req, res) => {
  const jsonwebtoken = jwt;
  const { authorization } = req.headers;

  if (authorization) {
    try {
      jsonwebtoken.verify(authorization, 'secret');
    } catch {
      const { status, message } = invalidToken;

      return res.status(status).send({
        message,
      });
    }
  }

  graphqlHTTP({
    graphiql: true,
    schema,
    customFormatErrorFn: (err) => {
      const { status } = err.extensions;

      res.status(status as number);

      return {
        message: err.message,
      };
    },
  })(req, res);
});
app.get('/breadcrumbs/:pageName', (req, res) => {
  try {
    res.send(breadcrumbsDB.getItem(req.params.pageName));
  } catch (error) {
    const { status, message } = error;

    res.status(status).send({
      message,
    });
  }
});
app.get('/menu/:role', (req, res) => {
  try {
    res.send(menuDB.getItem(req.params.role));
  } catch (error) {
    const { status, message } = error;

    res.status(status).send({
      message,
    });
  }
});

// eslint-disable-next-line no-console
app.listen(4000, () => console.log('start'));
