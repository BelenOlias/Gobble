const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ratingSchema = new Schema({

    rating: {
        type: Number
    },

    restaurant: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Restaurant'
    },

    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    }
})

const Rating = mongoose.model('Rating', ratingSchema)

module.exports = Rating