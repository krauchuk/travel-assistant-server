const graphql = require('graphql');

const { GraphQLInt } = graphql;

const CitiesListType = require('../../../types/list/cities');

const cities = require('../../../../data/city');

module.exports = {
  type: CitiesListType,
  args: { page: { type: GraphQLInt } },
  resolve(parent, args) {
    const { page } = args;

    const perPage = 5;
    const offset = (page - 1) * perPage;
    const limit = page * perPage;

    let hasNext = false;
    let hasPrev = false;

    if (limit < cities.length) hasNext = true;
    if (offset !== 0) hasPrev = true;

    const result = {
      all: cities.slice(offset, limit),
      popular: cities.slice(0, 3),
    };

    result.pagination = {
      currentPage: +page,
      hasNext,
      hasPrev,
    };

    return result;
  },
};
