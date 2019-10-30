const graphql = require('graphql');

const { GraphQLID } = graphql;

const CountryType = require('../../../types/country');

const countries = require('../../../../data/country');
const cities = require('../../../../data/city');
const places = require('../../../../data/place');

module.exports = {
  type: CountryType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    const countryId = args.id;
    const result = countries.find((country) => country.id == countryId);
    const countryCities = cities.filter((city) => (city.countryId == countryId));
    const countryPopularCities = countryCities.length ? countryCities.slice(0, 3) : null;
    const countryPopularPlaces = places.filter(
      (place) => (place.countryId == countryId),
    ).slice(0, 3);
    result.cities = countryCities;
    result.popularCities = countryPopularCities;
    result.popularPlaces = countryPopularPlaces.length ? countryPopularPlaces : null;
    return result;
  },
};
