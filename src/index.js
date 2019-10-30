const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql/schema');

const app = express();
app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));
app.use(cors());

app.listen(3333, () => {
  console.log('server is running');
});
