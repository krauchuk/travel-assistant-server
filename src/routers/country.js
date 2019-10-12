const express = require('express');

const router = express.Router();

const data = [
    {
        id: 4,
        name: 'Germany',
        stars: 17,
        pic: 'http://www.world-globe.ru/files/flags/germany_l.png',
    },
    {
        id: 1,
        name: 'Belarus',
        stars: 15,
        pic: 'http://www.world-globe.ru/files/flags/belarus_l.png',
    },
    {
        id: 3,
        name: 'Japan',
        stars: 13,
        pic: 'http://www.world-globe.ru/files/flags/japan_l.png',
    },
    {
        id: 5,
        name: 'Lithuania',
        stars: 7,
        pic: 'http://www.world-globe.ru/files/flags/lithuania_l.png',
    },
    {
        id: 2,
        name: 'Russia',
        stars: 5,
        pic: 'http://www.world-globe.ru/files/flags/russia_l.png',
    },
];

router.get('/', (req, res) => {
    const {
        page,
    } = req.query;

    const perPage = 4;
    const offset = (page - 1) * perPage;
    const limit = page * perPage;

    const result = {
        all: data.slice(offset, limit),
        popular: data.slice(0, 3),
    };

    res.send(result);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    const result = data.find(elem => {
        return elem.id === parseInt(id, 10);
    });

    res.send(result);
});

module.exports = router;