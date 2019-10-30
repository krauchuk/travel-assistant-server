const graphql = require('graphql');

const { GraphQLObjectType } = graphql;

const country = require('./fields/country');
const countries = require('./fields/countries');
const city = require('./fields/city');
const cities = require('./fields/cities');
const place = require('./fields/place');
const places = require('./fields/places');

module.exports = new GraphQLObjectType({
  name: 'Query',
  fields: {
    country,
    countries,
    city,
    cities,
    place,
    places,
  }
});
