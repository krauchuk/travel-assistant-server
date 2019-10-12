const express = require('express');

const router = express.Router();

/* 
typeId: 1 - hotel, hostel (housing)
typeId: 2 - park, monument (attractions)
typeId: 3 - restaurant, cafe (food)
*/

const data = [
    {
        id: 6,
        name: 'Berlin Restaurant',
        type: 'restaurant',
        typeId: 3,
        stars: 16,
        pic: '',
        info: {
            description: 'best Berlin restaurant',
            price: '75 EUR',
            address: 'Berlin moscow str',
        },
        cityId: 8,
    },
    {
        id: 5,
        name: 'Tokio Restaurant',
        type: 'restaurant',
        typeId: 3,
        stars: 12,
        pic: '',
        info: {
            description: 'best Tokio restaurant',
            price: '50 JPY',
            address: 'Tokio central str',
        },
        cityId: 5,
    },
    {
        id: 4,
        name: 'Central Tokio Park',
        type: 'park',
        typeId: 2,
        stars: 10,
        pic: '',
        info: {
            description: 'best Tokio park',
            price: '500 JPY',
            address: 'Tokio central str',
        },
        cityId: 5,
    },
    {
        id: 8,
        name: 'Berlin cafe',
        type: 'cafe',
        typeId: 3,
        stars: 9,
        pic: '',
        info: {
            description: 'best Berlin cafe',
            price: '25 EUR',
            address: 'Berlin central str',
        },
        cityId: 8,
    },
    {
        id: 3,
        name: 'Central Moscow Park',
        type: 'park',
        typeId: 2,
        stars: 7,
        pic: '',
        info: {
            description: 'best Moscow park',
            price: null,
            address: 'Moscow lelins str',
        },
        cityId: 3,
    },
    {
        id: 9,
        name: 'Alytus Hotel',
        type: 'hotel',
        typeId: 1,
        stars: 6,
        pic: '',
        info: {
            description: 'best Alytus hotel',
            price: '20 EUR',
            address: 'Alytus central str',
        },
        cityId: 10,
    },
    {
        id: 2,
        name: 'Hotel Gomel',
        type: 'hotel',
        typeId: 1,
        stars: 5,
        pic: '',
        info: {
            description: 'best Gomel hotel',
            price: '8 BYN',
            address: 'gomel lelins str',
        },
        cityId: 2,
    },
    {
        id: 7,
        name: 'Central Berlin park',
        type: 'park',
        typeId: 2,
        stars: 4,
        pic: '',
        info: {
            description: 'best Berlin park',
            price: null,
            address: 'Berlin belarus str',
        },
        cityId: 8,
    },
    {
        id: 1,
        name: 'Lenin monument in Minsk',
        type: 'monument',
        typeId: 2,
        stars: 2,
        pic: '',
        info: {
            description: 'Lenin monument',
            price: null,
            address: 'misk lelins str',
        },
        cityId: 1,
    },
    {
        id: 10,
        name: 'Alytus hostel',
        type: 'hostel',
        typeId: 1,
        stars: 2,
        pic: '',
        info: {
            description: 'best Alytus hostel',
            price: '3 EUR',
            address: 'Alytus central str',
        },
        cityId: 10,
    },
];

router.get('/', (req, res) => {
    const {
        page,
    } = req.query;

    const perPage = 5;
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