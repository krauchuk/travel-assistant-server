const graphql = require('graphql');

const { GraphQLID } = graphql;

const PlaceType = require('../../../types/place');

const places = require('../../../../data/place');

module.exports = {
  type: PlaceType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return places.find((place) => place.id == args.id);
  },
};
