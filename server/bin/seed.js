const mongoose = require('mongoose')

const dbName = 'Restaurants'

mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true })

const Restaurant = require('../models/restaurant.model')

const restaurants = [
    {
        name: 'Fellina',
        cooking: 'Italiana',
        pending: true,
        price: '€€'
    },

    {
        name: 'La diavla',
        cooking: 'Mexicana',
        pending: true,
        price: '€€'
    },

    {
        name: 'El perro y la galleta',
        cooking: ['Mediterránea', 'Internacional'],
        pending: false,
        rate: 8,
        price: '€€'
    },

    {
        name: 'Sumo',
        cooking: 'Sushi',
        pending: false,
        rate: 7,
        price: '€€'
    },

    {
        name: 'Noname Bar',
        cooking: 'Sushi',
        pending: true,
        price: '€€€'
    },

    {
        name: 'Bel Mondo',
        cooking: 'Italiana',
        pending: true,
        price: '€€'
    },

    {
        name: 'Tatel',
        cooking: 'Internacional',
        pending: false,
        rate: 9,
        price: '€€€'
    },

    {
        name: 'Perrachica',
        cooking: 'Internacional',
        pending: false,
        rate: 8,
        price: '€€€'
    },


]

mongoose.connection.collections['restaurants'].drop()

Restaurant.create(restaurants)
    .then(restaurants => console.log(`Se han creado ${restaurants.length} restaurantes en la DDBB`))
    .catch(err => console.log(err))
