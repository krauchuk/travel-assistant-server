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
        city: {
            id: 8,
            name: 'Berlin',
        },
        country: {
            id: 4,
            name: 'Germany',
        },
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
        city: {
            id: 5,
            name: 'Tokio',
        },
        country: {
            id: 3,
            name: 'Japan',
        },
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
            price: null,
            address: 'Tokio central str',
        },
        city: {
            id: 5,
            name: 'Tokio',
        },
        country: {
            id: 3,
            name: 'Japan',
        },
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
        city: {
            id: 8,
            name: 'Berlin',
        },
        country: {
            id: 4,
            name: 'Germany',
        },
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
        city: {
            id: 3,
            name: 'Moscow',
        },
        country: {
            id: 2,
            name: 'Russia',
        },
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
        city: {
            id: 10,
            name: 'Alytus',
        },
        country: {
            id: 5,
            name: 'Lithuania',
        },
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
        city: {
            id: 2,
            name: 'Gomel',
        },
        country: {
            id: 1,
            name: 'Belarus',
        },
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
        city: {
            id: 8,
            name: 'Berlin',
        },
        country: {
            id: 4,
            name: 'Germany',
        },
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
        city: {
            id: 1,
            name: 'Minsk',
        },
        country: {
            id: 1,
            name: 'Belarus',
        },
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
        city: {
            id: 10,
            name: 'Alytus',
        },
        country: {
            id: 5,
            name: 'Lithuania',
        },
    },
];

module.exports = data;