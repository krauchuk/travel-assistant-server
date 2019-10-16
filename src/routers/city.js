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

    let hasNext = false;
    let hasPrev = false;

    if(limit < cities.length) hasNext = true;
    if(offset !== 0) hasPrev = true;

    const result = {
        all: cities.slice(offset, limit),
        popular: cities.slice(0, 3),
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
    const cityId = parseInt(id, 10);

    let typesIdSet = new Set();

    const result = cities.find(city => {
        return city.id === cityId;
    });

    const cityPlaces = places.filter(place => {
        if(place.city.id === cityId) {
            typesIdSet.add(place.typeId);
            return place;
        }
    });  

    const popularCityPlaces = cityPlaces.slice(0, 3);

    const typesIdArr = [...typesIdSet];
    let allTypesArr = [
        {id: 1, name: 'Lodging'},
        {id: 2, name: 'Attractions'},
        {id: 3, name: 'Food'},
    ];
    let types = [];
    if(typesIdArr.length > 1) {
        types.push({id: 0, name: 'All'});
        for(let i = 0; i < typesIdArr.length; i++) {
            for(let j = 0; j < allTypesArr.length; j++) {
                if(allTypesArr[j].id === typesIdArr[i]) {
                    types.push(allTypesArr[j]);
                }
            }
        }
    }

    result.places = {
        popular: popularCityPlaces,
        all: cityPlaces,
        types,
    };
    
    res.send(result);
});
  
module.exports = router;