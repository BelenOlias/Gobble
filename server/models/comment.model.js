const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({

    commentBody: {
        type: String
    },

    author: {
        type: Object
    },

    restaurant: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Restaurant'
    },

    date: {
        type: Date
    }
},

    {
    timestamps: true
    })

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment