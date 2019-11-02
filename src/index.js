const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql/schema');

const app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

app.listen(3333, () => {
  console.log('server is running');
});
