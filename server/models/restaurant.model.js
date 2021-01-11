const mongoose = require('mongoose')
const Schema = mongoose.Schema

const restaurantSchema = new Schema({

    name: {
        required: true,
        type: String
    }, 

    cooking: {
        required: true,
        type: [String]
    },

    description: {
        type: String
    },
    
    location: {
        address: String,
        lat: String,
        lng: String
    },

    email: {
        type: String
    },

    phone: {
        type: String
    },

    rate: {
        type: Number
    },

    price: {
        type: String,
        enum: ['€', '€€', '€€€', '€€€€']
    },

    comments: {
        type: []
    }, 

    imageUrl: String

},
{
    timestamps: true
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema)

module.exports = Restaurant