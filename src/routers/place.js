const express = require('express');
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
        all: places.slice(offset, limit),
        popular: places.slice(0, 3),
    };
    res.send(result);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    const result = places.find(place => {
        return place.id === parseInt(id, 10);
    });

    res.send(result);
});
  
module.exports = router;