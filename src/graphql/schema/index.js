const graphql = require('graphql');
const { GraphQLSchema } = graphql;
const Query = require('./query')

module.exports = new GraphQLSchema({
  query: Query,
});
