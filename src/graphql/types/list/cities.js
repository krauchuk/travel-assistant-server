const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLList,
} = graphql;

const CityType = require('../city');
const PaginationType = require('../pagination');

const CitiesListType = new GraphQLObjectType({
  name: 'CitiesList',
  fields: () => ({
    all: { type: new GraphQLList(CityType) },
    popular: { type: new GraphQLList(CityType) },
    pagination: { type: PaginationType },
  }),
});

module.exports = CitiesListType;
