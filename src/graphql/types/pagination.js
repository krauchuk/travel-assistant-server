const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLInt,
} = graphql;

const PaginationType = new GraphQLObjectType({
  name: 'Pagination',
  fields: () => ({
    currentPage: { type: GraphQLInt },
    hasNext: { type: GraphQLBoolean },
    hasPrev: { type: GraphQLBoolean },
  }),
});

module.exports = PaginationType;
