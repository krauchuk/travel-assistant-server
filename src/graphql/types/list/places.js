const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLList,
} = graphql;

const PlaceType = require('../place');
const PaginationType = require('../pagination');

const PlacesListType = new GraphQLObjectType({
  name: 'PlacesList',
  fields: () => ({
    all: { type: new GraphQLList(PlaceType) },
    popular: { type: new GraphQLList(PlaceType) },
    pagination: { type: PaginationType },
  }),
});

module.exports = PlacesListType;
