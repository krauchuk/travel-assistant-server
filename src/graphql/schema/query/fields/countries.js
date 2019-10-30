const graphql = require('graphql');

const { GraphQLInt } = graphql;

const CountriesListType = require('../../../types/list/countries');

const countries = require('../../../../data/country');

module.exports = {
  type: CountriesListType,
  args: { page: { type: GraphQLInt } },
  resolve(parent, args) {
    const { page } = args;

    const perPage = 4;
    const offset = (page - 1) * perPage;
    const limit = page * perPage;

    let hasNext = false;
    let hasPrev = false;

    if (limit < countries.length) hasNext = true;
    if (offset !== 0) hasPrev = true;

    const result = {
      all: countries.slice(offset, limit),
      popular: countries.slice(0, 3),
    };

    result.pagination = {
      currentPage: +page,
      hasNext,
      hasPrev,
    };

    return result;
  },
};
