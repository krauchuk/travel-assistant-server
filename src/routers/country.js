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

    const result = {
        all: countries.slice(offset, limit),
        popular: countries.slice(0, 3),
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
        return city.countryId === countryId;
    });

    const countryPopularCities = countryCities.slice(0, 3);

    const countryPopularPlaces = places.filter(place => {
        return place.countryId === countryId;
    }).slice(0, 3);

    result.cities = {
        popular: countryPopularCities,
        all: countryCities,
    };

    result.popularPlaces = countryPopularPlaces;

    res.send(result);
});

module.exports = router;