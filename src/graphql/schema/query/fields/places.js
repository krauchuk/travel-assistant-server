const graphql = require('graphql');

const { GraphQLInt } = graphql;

const PlacesListType = require('../../../types/list/places');

const places = require('../../../../data/place');

module.exports = {
  type: PlacesListType,
  args: { page: { type: GraphQLInt } },
  resolve(parent, args) {
    const { page } = args;

    const perPage = 4;
    const offset = (page - 1) * perPage;
    const limit = page * perPage;

    let hasNext = false;
    let hasPrev = false;

    if (limit < places.length) hasNext = true;
    if (offset !== 0) hasPrev = true;

    const result = {
      all: places.slice(offset, limit),
      popular: places.slice(0, 3),
    };

    result.pagination = {
      currentPage: +page,
      hasNext,
      hasPrev,
    };
    return result;
  },
};
