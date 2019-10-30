const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLList,
} = graphql;

const CountryType = require('../country');
const PaginationType = require('../pagination');

const CountriesListType = new GraphQLObjectType({
  name: 'CountriesList',
  fields: () => ({
    all: { type: new GraphQLList(CountryType) },
    popular: { type: new GraphQLList(CountryType) },
    pagination: { type: PaginationType },
  }),
});

module.exports = CountriesListType;
