const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
} = graphql;

const LocationType = require('./location');

const countries = require('../../data/country');
const cities = require('../../data/city');

const InfoType = new GraphQLObjectType({
  name: 'PlaceInfo',
  fields: () => ({
    description: { type: GraphQLString },
    price: { type: GraphQLString },
    address: { type: GraphQLString },
  }),
});

const PlaceType = new GraphQLObjectType({
  name: 'Place',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    type: { type: GraphQLInt },
    typeId: { type: GraphQLInt },
    stars: { type: GraphQLInt },
    pic: { type: GraphQLString },
    info: { type: InfoType },
    city: {
      type: LocationType,
      resolve(parent) {
        return cities.find((city) => city.id == parent.cityId);
      },
    },
    country: {
      type: LocationType,
      resolve(parent) {
        return countries.find((country) => country.id == parent.countryId);
      },
    },
  }),
});

module.exports = PlaceType;
