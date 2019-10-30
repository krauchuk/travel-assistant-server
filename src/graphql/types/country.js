const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} = graphql;

const CityType = require('./city');
const PlaceType = require('./place');

const InfoType = new GraphQLObjectType({
  name: 'CountryInfo',
  fields: () => ({
    description: { type: GraphQLString },
  }),
});

const CountryType = new GraphQLObjectType({
  name: 'Country',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    stars: { type: GraphQLInt },
    pic: { type: GraphQLString },
    info: { type: InfoType },
    cities: { type: new GraphQLList(CityType) },
    popularCities: { type: new GraphQLList(CityType) },
    popularPlaces: { type: new GraphQLList(PlaceType) },
  }),
});

module.exports = CountryType;
