const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} = graphql;

const LocationType = new GraphQLObjectType({
  name: 'Location',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
  }),
});

module.exports = LocationType;
