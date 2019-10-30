const graphql = require('graphql');

const { GraphQLID } = graphql;

const CityType = require('../../../types/city');

const cities = require('../../../../data/city');
const places = require('../../../../data/place');

module.exports = {
  type: CityType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    const cityId = args.id;

    const typesIdSet = new Set();

    const result = cities.find((city) => city.id == cityId);

    const cityPlaces = places.filter((place) => {
      if (place.cityId == cityId) {
        typesIdSet.add(place.typeId);
        return place;
      }
      return null;
    });

    const popularCityPlaces = cityPlaces.length ? cityPlaces.slice(0, 3) : null;

    const typesIdArr = [...typesIdSet];
    const allTypesArr = [
      { id: 1, name: 'Lodging' },
      { id: 2, name: 'Attractions' },
      { id: 3, name: 'Food' },
    ];
    const types = [];
    if (typesIdArr.length > 1) {
      types.push({ id: 0, name: 'All' });
      for (let i = 0; i < typesIdArr.length; i += 1) {
        for (let j = 0; j < allTypesArr.length; j += 1) {
          if (allTypesArr[j].id === typesIdArr[i]) {
            types.push(allTypesArr[j]);
          }
        }
      }
    }

    result.places = cityPlaces;
    result.placesTypes = types;
    result.popularPlaces = popularCityPlaces;

    return result;
  },
};
