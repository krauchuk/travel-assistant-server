const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} = graphql;

const LocationType = require('./location');
const PlaceType = require('./place');

const countries = require('../../data/country');

const InfoType = new GraphQLObjectType({
  name: 'CityInfo',
  fields: () => ({
    description: { type: GraphQLString },
  }),
});

const PlacesTypeArr = new GraphQLObjectType({
  name: 'PlaceType',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
  }),
});

const CityType = new GraphQLObjectType({
  name: 'City',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    stars: { type: GraphQLInt },
    pic: { type: GraphQLString },
    info: { type: InfoType },
    places: { type: new GraphQLList(PlaceType) },
    popularPlaces: { type: new GraphQLList(PlaceType) },
    placesTypes: { type: new GraphQLList(PlacesTypeArr) },
    country: {
      type: LocationType,
      resolve(parent) {
        return countries.find((country) => country.id == parent.countryId);
      },
    },
  }),
});

module.exports = CityType;
