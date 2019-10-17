const express = require('express');
const countries = require('../data/country');
const cities = require('../data/city');
const places = require('../data/place');

const router = express.Router();

router.get('/', (req, res) => {
    const {
        page,
    } = req.query;

    const perPage = 4;
    const offset = (page - 1) * perPage;
    const limit = page * perPage;

    let hasNext = false;
    let hasPrev = false;

    if(limit < countries.length) hasNext = true;
    if(offset !== 0) hasPrev = true;

    const result = {
        all: countries.slice(offset, limit),
        popular: countries.slice(0, 3),
    };

    result.pagination = {
        currentPage: +page,
        hasNext,
        hasPrev,
    };

    res.send(result);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const countryId = parseInt(id, 10);

    const result = countries.find(country => {
        return country.id === countryId;
    });

    const countryCities = cities.filter(city => {
        return city.country.id === countryId;
    });

    const countryPopularCities = countryCities.length ? countryCities.slice(0, 3) : null;

    const countryPopularPlaces = places.filter(place => {
        return place.country.id === countryId;
    }).slice(0, 3);

    result.cities = countryCities;
    result.popularCities = countryPopularCities;
    result.popularPlaces = countryPopularPlaces.length ? countryPopularPlaces : null;

    res.send(result);
});

module.exports = router;