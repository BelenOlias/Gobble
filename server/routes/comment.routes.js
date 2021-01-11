const express = require('express')
const router = express.Router()

const Comment = require('../models/comment.model')

//Endpoints

router.get('/getComments', (req, res) => {

    Comment.find()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))

})

router.get('/getRestaurantComments/:restaurant_id', (req, res) => {

    const id = req.params.restaurant_id

    Comment.find({restaurant: id})
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

router.post('/newComment', (req, res) => {

    Comment.create(req.body)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

router.put('/editComment/:comment_id', (req, res) => {

    if (!mongoose.Types.ObjectId.isValid(req.params.comment_id)) {
        res.status(400).json({ message: 'Specified id is not valid' })
        return
    }

    Comment.findByIdAndUpdate(req.params.comment_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.delete('/:comment_id/delete', (req, res) => {

    const id = req.params.comment_id

    Comment.findByIdAndDelete(id) 
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))

})

module.exports = router