const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const cors = require('cors');
const schema = require('./schema/schema');
const app = express();
const UserDB = require('./db/users.db');
const root = new UserDB();

app.use(cors());
app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema,
  rootValue: root
}));

app.listen(4000, () => console.log('start'));
