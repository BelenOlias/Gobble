const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({

    username: {
        type: String,
        required: true,
        default: 'username'
    },

    password: {
        type: String,
        required: true,
        default: 'password'
    },

    imageUrl: {
        type: String
    },

    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },

    pending: {
        type: Array
    },

    visited: {
        type: Array
    },

}, {

    timestamps: true
    
})

const User = mongoose.model('User', userSchema)

module.exports = User