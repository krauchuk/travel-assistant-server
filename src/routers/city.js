const express = require('express');
const cities = require('../data/city');
const places = require('../data/place');

const router = express.Router();

router.get('/', (req, res) => {
    const {
        page,
    } = req.query;

    const perPage = 5;
    const offset = (page - 1) * perPage;
    const limit = page * perPage;

    const result = {
        all: cities.slice(offset, limit),
        popular: cities.slice(0, 3),
    };

    res.send(result);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const cityId = parseInt(id, 10);

    const result = cities.find(city => {
        return city.id === cityId;
    });

    const cityPlaces = places.filter(place => {
        return place.cityId === cityId;
    }); 

    const popularCityPlaces = cityPlaces.slice(0, 3);

    result.places = {
        popular: popularCityPlaces,
        all: cityPlaces,
    };
    
    res.send(result);
});
  
module.exports = router;